import {
  faArrowRight,
  faArrowsRotate,
  faCalendarCheck,
  faSquarePen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import formatDate from "../utils/formatDate";

const StyledBlogPostItem = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 0;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(168, 212, 245, 0.12);
  transition:
    border-color 0.3s ease,
    background 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
    border-color: rgba(168, 212, 245, 0.25);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const BlogPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem 2rem;
  gap: 0.5rem;
  color: #fff;
`;

const PostTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin-bottom: 0.25rem;
`;

const StyledP = styled.p`
  font-size: 0.9rem;
  color: rgba(168, 212, 245, 0.75);
  font-weight: 300;
  line-height: 1.65;
  margin-bottom: 0.5rem;
  flex: 1;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
`;

const ReadMore = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #60a5e8;
  letter-spacing: 0.04em;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  opacity: 0;
  transform: translateX(-4px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

  ${StyledBlogPostItem}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: rgba(168, 212, 245, 0.5);

  strong {
    font-weight: 500;
    color: rgba(168, 212, 245, 0.7);
  }
`;

function BlogPostItem({ post }) {
  return (
    <StyledBlogPostItem className="mb-3">
      {/* Left Image */}
      <StyledImg src={post.cover_image_url} className="img-fluid" />
      <BlogPostInfo>
        {/* Title */}
        <PostTitle>{post.title}</PostTitle>
        {/* Short Description */}
        <StyledP>{post.short_description}</StyledP>
        <MetaRow>
          {/* Author */}
          <MetaItem>
            <FontAwesomeIcon icon={faSquarePen} />
            Autor: <strong>{post.author}</strong>
          </MetaItem>
          {/* Created At */}
          <MetaItem>
            <FontAwesomeIcon icon={faCalendarCheck} />
            {formatDate(post?.created_at)}
          </MetaItem>
          {/* Last Updated At */}
          <MetaItem>
            <FontAwesomeIcon icon={faArrowsRotate} />
            {formatDate(post?.updated_at)}
          </MetaItem>
        </MetaRow>
        <ReadMore>
          Citește articolul <FontAwesomeIcon icon={faArrowRight} />
        </ReadMore>
      </BlogPostInfo>
    </StyledBlogPostItem>
  );
}

export default BlogPostItem;
