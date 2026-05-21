import styled from "styled-components";
import { Link } from "react-router";
import { useBlogPosts } from "../hooks/useBlogPosts";
import BlogPostItem from "./BlogPostItem";
import LoadingSpinner from "./LoadingSpinner";

const ContainerBlogPosts = styled.div`
  background-color: #0f2f5a;
`;

const Posts = styled.div`
  padding: 5rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 576px) {
    padding: 3rem 0;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 3rem 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 1rem;
  color: rgba(168, 212, 245, 0.75);
  margin-bottom: 3rem;
  font-weight: 300;
  max-width: 600px;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

function BlogPosts() {
  const { data: posts, isLoading } = useBlogPosts();

  if (isLoading) return <LoadingSpinner />;

  return (
    <ContainerBlogPosts>
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
    </ContainerBlogPosts>
  );
}

export default BlogPosts;
