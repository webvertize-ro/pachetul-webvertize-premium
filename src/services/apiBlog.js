import supabase from "./supabase.js";
import { WEBSITE_ID } from "../../config.js";

export async function getBlogPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("website_id", WEBSITE_ID)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

export async function getBlogPostBySlug(slug) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("website_id", WEBSITE_ID)
    .eq("slug", slug)
    .single();

  if (error) throw new Error(error.message);
  return data;
}
