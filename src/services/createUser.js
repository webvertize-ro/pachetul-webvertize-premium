import supabase from './supabase';

export async function createUser() {
  await supabase.from('users').insert([{ name:  }]);
}
