import { useParams } from "react-router";
import { useBlogPost } from "../hooks/useBlogPosts";

function BlogPost() {
  const { slug } = useParams(); // reads "primul-meu-articol" from the URL
  const { data: post, isLoading } = useBlogPost(slug);

  if (isLoading) return <p>Se incarca...</p>;
  if (!post) return <p>Articolul nu a fost gasit.</p>;

  return (
    <article>
      {post.cover_image_url && (
        <img src={post.cover_image_url} alt={post.title} />
      )}
      <h1>{post.title}</h1>
      <p>
        {post.author} - {new Date(post.created_at).toLocaleDateString("ro-RO")}
      </p>
      <div>{post.body}</div>
    </article>
  );
}

export default BlogPost;
