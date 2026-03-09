import supabase from './supabase';

export async function getUser(id) {
  if (!id) return null;

  let { data, error } = await supabase.from('users').select('*').eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('User could not be loaded!');
  }

  return data;
}

export async function createUser(newUser) {
  const { data, error } = await supabase
    .from('users')
    .insert([newUser])
    .select();

  if (error) {
    console.error(error);
    throw new Error('User could not be created!');
  }

  return data;
}

export async function deleteUser(id) {
  const { data, error } = await supabase.from('users').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('User could not be deleted!');
  }

  return data;
}
