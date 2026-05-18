import { useParams } from "react-router";
import { useBlogPost } from "../hooks/useBlogPosts";
import LoadingSpinner from "../components/LoadingSpinner";
import styled from "styled-components";
import formatDate from "../utils/formatDate";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faCalendarCheck,
  faSquarePen,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const ArticleContainer = styled.div`
  padding: 3rem 0;
  color: #fff;
`;

const ArticleContainerInner = styled.div`
  display: flex;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const StyledArticleTop = styled.div`
  width: 100%;
`;

const ArticleTopSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const ArticleImageContainer = styled.div``;

const OpenIconContainer = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  padding: 0.25rem;
  pointer-events: none;
`;

const StyledImgContainer = styled.div`
  position: relative;
  max-width: 600px;
  transition: all 0.3s ease;
  /* object-fit: cover; */

  &:hover {
    cursor: pointer;
    ${OpenIconContainer} {
      display: block;
    }
    &:after {
      content: "";
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  pointer-events: none;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
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
  const [imageOpen, setImageOpen] = useState(false);

  if (isLoading) return <LoadingSpinner />;
  if (!post) return <p>Articolul nu a fost gasit.</p>;

  const paragraphs = post.body
    .split("\n")
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  console.log("paragraphs: ", paragraphs);

  return (
    <>
      <ArticleContainer className="container">
        <StyledArticle className="col-md-8">
          <StyledArticleTop>
            <StyledImgContainer>
              {post.cover_image_url && (
                <StyledImg
                  srcSet={post.cover_image_url}
                  alt={post.title}
                  className="img-fluid"
                  onClick={() => setImageOpen(true)}
                />
              )}
              <OpenIconContainer>
                <StyledFontAwesomeIcon icon={faUpRightFromSquare} />
              </OpenIconContainer>
            </StyledImgContainer>

            <ArticleInfo className="mb-3">
              <h1>{post.title}</h1>
              <div>
                <strong>
                  <FontAwesomeIcon icon={faSquarePen} />
                  Autor:{" "}
                </strong>
                {post.author}
              </div>
              <div>
                <strong>
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  Publicat la:{" "}
                </strong>
                {formatDate(post?.created_at)}
              </div>

              {WasUpdated && (
                <div>
                  <strong>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                    Actualizat la:{" "}
                  </strong>
                  {formatDate(post?.updated_at)}
                </div>
              )}
            </ArticleInfo>
          </StyledArticleTop>

          <ArticleBody>
            {paragraphs.map((paragraph) => (
              <StyledP>{paragraph}</StyledP>
            ))}
          </ArticleBody>
        </StyledArticle>
      </ArticleContainer>
      <Lightbox
        open={imageOpen}
        close={() => setImageOpen(false)}
        slides={[{ src: post.cover_image_url }]}
      />
    </>
  );
}

export default BlogPost;
