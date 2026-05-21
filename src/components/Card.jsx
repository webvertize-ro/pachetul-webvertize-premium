import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  z-index: 10;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.75rem;
  padding: 10rem 1rem 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  border: 0.5px solid rgba(168, 212, 245, 0.12);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  &:after {
    content: "";
    background-color: rgba(11, 34, 64, 0.35);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0.75rem;
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(168, 212, 245, 0.25);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 11;
  color: #fff;
  background-color: rgba(15, 47, 90, 0.75);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(10px);
  border: 0.5px solid rgba(168, 212, 245, 0.15);
  margin-top: auto;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  height: 100%;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  color: #60a5e8;
`;

const StyledH4 = styled.h4`
  font-weight: 500;
  font-size: 1rem;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    /* font-size: 1rem; */
  }
`;

const StyledP = styled.p`
  font-weight: 300;
  text-align: center;
  font-size: 0.875rem;
  color: rgba(168, 212, 245, 0.75);
`;

function Card({ title, text, bg_img, icon }) {
  return (
    <StyledCard img={bg_img}>
      <TextContent>
        <StyledFontAwesomeIcon icon={icon} />
        <StyledH4 className="card-title">{title}</StyledH4>
        <StyledP className="card-text">{text}</StyledP>
      </TextContent>
    </StyledCard>
  );
}

export default Card;
