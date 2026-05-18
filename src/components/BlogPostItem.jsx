import {
  faArrowsRotate,
  faCalendarCheck,
  faSquarePen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import formatDate from "../utils/formatDate";

const StyledBlogPostItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: #3b82d4;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledImg = styled.img`
  max-height: 200px;
  border-radius: 1rem;
`;

const BlogPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const StyledP = styled.p`
  font-size: 1.25rem;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

function BlogPostItem({ post }) {
  return (
    <StyledBlogPostItem className="mb-3">
      {/* Left Image */}
      <StyledImg src={post.cover_image_url} className="img-fluid" />
      <BlogPostInfo>
        {/* Title */}
        <h3>{post.title}</h3>
        {/* Short Description */}
        <StyledP>{post.short_description}</StyledP>
        {/* Author */}
        <div>
          <strong>
            <FontAwesomeIcon icon={faSquarePen} />
            Autor:{" "}
          </strong>
          {post.author}
        </div>
        {/* Created At */}
        <div>
          <strong>
            <FontAwesomeIcon icon={faCalendarCheck} />
            Publicat la:{" "}
          </strong>
          {formatDate(post?.created_at)}
        </div>
        {/* Last Updated At */}
        <div>
          <strong>
            <FontAwesomeIcon icon={faArrowsRotate} />
            Actualizat la:{" "}
          </strong>
          {formatDate(post?.updated_at)}
        </div>
      </BlogPostInfo>
    </StyledBlogPostItem>
  );
}

export default BlogPostItem;
