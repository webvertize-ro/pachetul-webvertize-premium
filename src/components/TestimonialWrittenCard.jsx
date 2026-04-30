import styled from "styled-components";
import Avatar from "./Avatar";
import RatingStars from "./RatingStars";
import TestimonialContent from "./TestimonialContent";
import {
  faAddressCard,
  faBriefcase,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const StyledTestimonialWrittenCard = styled.div`
  border: 2px solid #fff;
  padding: 2rem 3rem;
  position: relative;
  border-radius: 1rem;
  height: 100%;
`;

const Quotes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: absolute;
  top: -10%;
  left: 10%;
  color: #1f3541;
  font-size: 3rem;
  background-color: #fff;
  border-radius: 50%;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;

const NameFontAwesomeIcon = styled(FontAwesomeIcon)``;

const UserNameAndProfession = styled.div`
  margin-top: 1rem;
  color: #fff;
  margin-top: auto;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserNameName = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`;

const UserProfession = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

function TestimonialWrittenCard({
  key,
  img,
  stars,
  content,
  name,
  profession,
}) {
  return (
    <StyledTestimonialWrittenCard
      key={key}
      className="d-flex flex-column align-items-center"
    >
      <Quotes>
        <StyledFontAwesomeIcon icon={faQuoteLeft} />
      </Quotes>
      {/* Avatar and Stars */}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Avatar img={img} />
        <RatingStars stars={stars} />
      </div>
      {/* Testimonial Text */}
      <TestimonialContent content={content} />
      {/* Testimonial User Name */}
      <UserNameAndProfession>
        <UserName>
          <div>
            <FontAwesomeIcon icon={faAddressCard} />
          </div>
          <UserNameName>{name}</UserNameName>
        </UserName>
        <UserProfession>
          <FontAwesomeIcon icon={faBriefcase} />
          {profession}
        </UserProfession>
      </UserNameAndProfession>
      {/* Google Logo */}
    </StyledTestimonialWrittenCard>
  );
}

export default TestimonialWrittenCard;
