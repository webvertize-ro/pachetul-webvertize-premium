import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledAccordionItem = styled.div`
  border-radius: 0.75rem;
  background: rgba(15, 47, 90, 0.7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 0.5px solid rgba(168, 212, 245, 0.15);
  ${(props) =>
    props.isOpen &&
    `
  border-color: rgba(168, 212, 245, 0.3);
`}
  transition: border-color 0.2s ease;
`;

const Question = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  border-radius: 0.75rem;
  gap: 0.75rem;
  border-left: ${(props) => (props.isOpen ? "3px solid #3b82d4" : "unset")};
  padding-left: ${(props) => (props.isOpen ? "0.85rem" : "1rem")};
`;

const QuestionNumber = styled.div`
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: #60a5e8;
  border: 0.5px solid rgba(96, 165, 232, 0.4);
  flex-shrink: 0;
`;

const QuestionText = styled.div`
  font-size: 0.95rem;

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const QuestionAnswer = styled.div`
  color: rgba(168, 212, 245, 0.8);
  padding: 1rem 1rem 1rem 1.25rem;
  font-size: 0.9rem;
  line-height: 1.75;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: left;
  }
`;

function AccordionItem({ question, answer, index, curOpen, onCurOpen }) {
  const isOpen = curOpen === index;

  function handleToggle() {
    onCurOpen(isOpen ? null : index);
  }

  return (
    <StyledAccordionItem isOpen={isOpen}>
      <Question onClick={() => handleToggle()} isOpen={isOpen}>
        <QuestionNumber>{index}</QuestionNumber>
        <QuestionText>{question}</QuestionText>
      </Question>
      {isOpen && <QuestionAnswer>{answer}</QuestionAnswer>}
    </StyledAccordionItem>
  );
}

export default AccordionItem;
