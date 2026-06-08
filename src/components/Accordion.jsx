import styled from "styled-components";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
import accordionDefaultImg from "../assets/images/accordion_default_img.avif";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledAccordion = styled.div`
  background-color: #0f2f5a;
  padding: 5rem 0;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-color: rgba(11, 34, 64, 0.75);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 90;
  }

  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }
`;

const StyledH2 = styled.h2`
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.01em;
  font-size: 2rem;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    margin-bottom: 2rem;
  }
`;

const StyledP = styled.p`
  color: rgba(168, 212, 245, 0.75);
  font-size: 1rem;
  font-weight: 300;
  max-width: 560px;
  margin-bottom: 2.5rem;
`;

const Container = styled.div`
  position: relative;
  z-index: 91;
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

function Accordion({ faqs, title, subtitle, bgImg }) {
  const { contentMap } = useContent();
  const [curOpen, setCurOpen] = useState(1);

  return (
    <StyledAccordion bgImg={bgImg ? bgImg : accordionDefaultImg}>
      <Container className="container">
        <StyledH2>{title}</StyledH2>
        {subtitle ? <StyledP>{subtitle}</StyledP> : ""}
        <AccordionContainer className="accordion" id="accordionExample">
          {faqs.map((item, index) => (
            <AccordionItem
              question={item.question}
              answer={item.answer}
              index={item.number}
              curOpen={curOpen}
              onCurOpen={setCurOpen}
              key={index}
            />
          ))}
        </AccordionContainer>
      </Container>
    </StyledAccordion>
  );
}

export default Accordion;
