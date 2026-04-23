import supabase from './supabase';
import { WEBSITE_ID } from '../../config';

export async function getContent() {
  const { data, error } = await supabase
    .from('content')
    .select('*')
    .eq('website_id', WEBSITE_ID)
    .order('display_order');

  if (error) throw new Error(error.message);
  return data;
}
