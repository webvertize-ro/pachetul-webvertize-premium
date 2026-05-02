import { useParams } from "react-router";
import { useBlogPost } from "../hooks/useBlogPosts";
import LoadingSpinner from "../components/LoadingSpinner";
import styled from "styled-components";
import formatDate from "../utils/formatDate";

const ArticleContainer = styled.div`
  padding: 3rem 0;
  color: #fff;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  max-width: 600px;
`;

const ArticleInfo = styled.div``;

const ArticleBody = styled.div``;

const StyledP = styled.p`
  text-align: justify;
`;

function BlogPost() {
  const { slug } = useParams(); // reads "primul-meu-articol" from the URL
  const { data: post, isLoading } = useBlogPost(slug);
  const WasUpdated = post?.created_at !== post?.updated_at;

  if (isLoading) return <LoadingSpinner />;
  if (!post) return <p>Articolul nu a fost gasit.</p>;

  return (
    <ArticleContainer className="container">
      <StyledArticle>
        <div className="mb-3">
          {post.cover_image_url && (
            <StyledImg src={post.cover_image_url} alt={post.title} />
          )}
        </div>

        <ArticleInfo className="mb-3">
          <h1>{post.title}</h1>
          <div>
            <strong>Autor: </strong>
            {post.author}
          </div>
          <div>
            <strong>Publicat la: </strong>
            {formatDate(post?.created_at)}
          </div>

          {WasUpdated && (
            <div>
              <strong>Actualizat la: </strong>
              {formatDate(post?.updated_at)}
            </div>
          )}
        </ArticleInfo>

        <ArticleBody>
          <StyledP>{post.body}</StyledP>
        </ArticleBody>
      </StyledArticle>
    </ArticleContainer>
  );
}

export default BlogPost;
