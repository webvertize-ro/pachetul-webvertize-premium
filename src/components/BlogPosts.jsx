import styled from "styled-components";
import { Link } from "react-router";
import { useBlogPosts } from "../hooks/useBlogPosts";
import BlogPostItem from "./BlogPostItem";
import LoadingSpinner from "./LoadingSpinner";

const Posts = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    padding: 2rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 2rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 1.25rem;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

function BlogPosts() {
  const { data: posts, isLoading } = useBlogPosts();
  console.log("posts in BlogPosts: ", posts);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Posts className="container">
      <StyledH2>Postările noastre</StyledH2>
      <StyledP>
        Află mai multe despre serviciile și produsele oferite de Afacerea
        Noastră Locală direct din postările de pe blogul nostru.{" "}
      </StyledP>
      {posts
        ?.filter((p) => p.is_published)
        .map((post) => (
          <StyledLink key={post.id} to={`/blog/${post.slug}`}>
            <div className="row">
              <BlogPostItem post={post} />
            </div>
          </StyledLink>
        ))}
    </Posts>
  );
}

export default BlogPosts;
