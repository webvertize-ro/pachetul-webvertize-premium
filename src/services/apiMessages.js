import supabase, { supabaseUrl } from './supabase';

export async function sendMessage(message) {
  // if there is message.document (so if there is a file), we need to send the text message (if it exists) and also upload the file
  if (message.document) {
    // check if the file is an image
    const isImage = message.document.type.startsWith('image/');

    const fileName = `${Math.random()}-${message.document.name}`.replaceAll(
      '/',
      '',
    );
    // Create file path
    const filePath = `${supabaseUrl}/storage/v1/object/public/documents/${fileName}`;

    // Upload the file
    const { error: storageError } = await supabase.storage
      .from('documents')
      .upload(fileName, message.document);

    if (storageError) {
      throw new Error('File could not be uploaded to the storage bucket!');
    }

    // Sending the message (either with just text or with text & file)
    const { data, error } = await supabase
      .from('messages')
      .insert([
        {
          ...message,
          document: filePath,
          has_image: isImage === true,
          document_name: message.document.name,
        },
      ])
      .select();

    if (error) {
      console.error(error);
      throw new Error('Message could not be sent!');
    }

    return data;
  } else {
    if (message.message) {
      const { data, error } = await supabase
        .from('messages')
        .insert([message])
        .select();

      if (error) {
        console.error(error);
        throw new Error('Message could not be sent!');
      }

      return data;
    }
  }
}

export async function getMessages(userId) {
  const { data: messages, error } = await supabase
    .from('messages')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    console.error(error);
    throw new Error('Messages could not be loaded!');
  }

  return messages;
}

// Subscription to real-time changes
export function subscribeToMessages(userId, callback) {
  return supabase
    .channel(`my-channel-${userId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `user_id=eq.${userId}`,
      },
      callback,
    )
    .subscribe();
}
