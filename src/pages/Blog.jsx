import { Link } from "react-router";
import { useBlogPosts } from "../hooks/useBlogPosts";

function Blog() {
  const { data: posts, isLoading } = useBlogPosts();

  if (isLoading) return <p>Se incarca...</p>;

  return (
    <div>
      <h1>Blog</h1>
      <div>
        {posts
          ?.filter((p) => p.is_published)
          .map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <div>
                {post.cover_image_url && (
                  <img src={post.cover_image_url} alt={post.title} />
                )}
                <h2>{post.title}</h2>
                <p>{post.short_description}</p>
                <p>{post.author}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Blog;
