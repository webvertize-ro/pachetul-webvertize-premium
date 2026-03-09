import supabase from './supabase';

export async function sendMessage(message) {
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
