import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import { Link } from "react-router";
import styled from "styled-components";
import Form from "./Form";

const StyledTimelineItem = styled.li`
  list-style: none;
  position: relative;
  text-align: center;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  @media (max-width: 576px) {
    &:not(:last-child) {
      border-bottom: 1px solid #fff;
    }
  }

  @media (min-width: 1140px) {
    padding-top: 45px;
    flex: 1;
    padding-bottom: unset;
    border-bottom: unset;

    &:before {
      content: "";
      position: absolute;
      height: 36px;
      border-right: 2px solid #dee2e6;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 36px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  font-size: 0.9rem;
  padding: 0.5rem;
  background-color: #b8a897;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  @media (min-width: 1140px) {
    top: -30px;
  }
`;

const StyledH4 = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const StyledP = styled.p`
  color: #fff;
  font-size: 1.1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: none;
  background-color: #142b3e;
  padding: 0.75rem;
  border-radius: 0.75rem;
  color: #fff;
  text-transform: uppercase;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const StyledButton = styled(Link)`
  text-decoration: none;
  border: none;
  background-color: #142b3e;
  padding: 0.75rem;
  border-radius: 0.75rem;
  color: #fff;
  text-transform: uppercase;
`;

function TimelineItem({ iconNum, icon, title, desc }) {
  return (
    <StyledTimelineItem>
      <Badge>
        <FontAwesomeIcon icon={iconNum} />
      </Badge>
      <StyledH4 className="pt-2">
        <StyledFontAwesomeIcon icon={icon} />
        <div>{title}</div>
      </StyledH4>
      <StyledP>{desc}</StyledP>
    </StyledTimelineItem>
  );
}

export default TimelineItem;
