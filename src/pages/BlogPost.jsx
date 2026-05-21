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
  padding: 5rem 0;

  color: #fff;
`;

const ArticleContainerInner = styled.div`
  display: flex;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
`;

const StyledArticleTop = styled.div`
  width: 100%;
`;

const ArticleTopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 2.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleImageContainer = styled.div``;

const OpenIconContainer = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  border: 0.5px solid rgba(168, 212, 245, 0.5);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  pointer-events: none;
  color: rgba(168, 212, 245, 0.9);
  backdrop-filter: blur(4px);
  background: rgba(15, 47, 90, 0.5);
`;

const StyledImgContainer = styled.div`
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;

  &:hover ${OpenIconContainer} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover::after {
    content: "";
    background-color: rgba(11, 34, 64, 0.6);
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
  pointer-events: none;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ArticleInfo = styled.div``;

const ArticleTitle = styled.h1`
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin-bottom: 1.25rem;
`;

const MetaRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.25rem;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: rgba(168, 212, 245, 0.55);

  strong {
    font-weight: 500;
    color: rgba(168, 212, 245, 0.75);
  }
`;

const ArticleBody = styled.div`
  padding-top: 2.5rem;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
  width: 100%;
`;

const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(168, 212, 245, 0.85);
  line-height: 1.85;
  margin-bottom: 1.5rem;
  max-width: 68ch;
`;

const NotFoundP = styled.p`
  color: rgba(168, 212, 245, 0.7);
  padding: 5rem 2rem;
`;

function BlogPost() {
  const { slug } = useParams(); // reads "primul-meu-articol" from the URL
  const { data: post, isLoading } = useBlogPost(slug);
  const WasUpdated = post?.created_at !== post?.updated_at;
  const [imageOpen, setImageOpen] = useState(false);

  if (isLoading) return <LoadingSpinner />;
  if (!post) return <NotFoundP>Articolul nu a fost gasit.</NotFoundP>;

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
              <ArticleTitle>{post.title}</ArticleTitle>
              <MetaRow>
                <MetaItem>
                  <FontAwesomeIcon icon={faSquarePen} />
                  <strong>{post.author}</strong>
                </MetaItem>
                <MetaItem>
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  {formatDate(post?.created_at)}
                </MetaItem>
                {WasUpdated && (
                  <MetaItem>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                    {formatDate(post?.updated_at)}
                  </MetaItem>
                )}
              </MetaRow>
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
