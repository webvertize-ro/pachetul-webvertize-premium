import { useQuery } from "@tanstack/react-query";
import { getBlogPosts, getBlogPostBySlug } from "../services/apiBlog";

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blog_posts"],
    queryFn: getBlogPosts,
  });
}

export function useBlogPost(slug) {
  return useQuery({
    queryKey: ["blog_post", slug],
    queryFn: () => getBlogPostBySlug(slug),
    enabled: !!slug,
  });
}
