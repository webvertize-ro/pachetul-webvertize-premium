import styled from "styled-components";
import { reasonsToChooseUs } from "../data/listData";
import ListItem from "./ListItem";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledWhatRecommendsUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 5rem 0;
  color: #fff;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
  background-color: #0f2f5a;
  position: relative;
  z-index: 90;

  @media (max-width: 576px) {
    padding: 3rem 0.75rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 3.5rem 0;
  }
`;

const Container = styled.div``;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  color: rgba(168, 212, 245, 0.75);
  font-size: 1rem;
  font-weight: 300;
  max-width: 560px;
  margin-bottom: 2.5rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  font-size: 1.25rem;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

function ReasonsToChooseUs() {
  const { contentMap } = useContent();

  const reasons = [1, 2, 3, 4].map((i) => ({
    icon: c(contentMap, `portfolio.reason_${i}_icon`),
    title: c(contentMap, `portfolio.reason_${i}_title`),
    description: c(contentMap, `portfolio.reason_${i}_description`),
  }));

  console.log("reasons: ", reasons);

  return (
    <StyledWhatRecommendsUs>
      <Container className="container">
        <StyledH2>{c(contentMap, "portfolio.what_recommends_title")}</StyledH2>
        <StyledP>
          {c(contentMap, "portfolio.what_recommends_description")}
        </StyledP>

        <div className="row">
          <StyledUl>
            {reasons.map((item) => (
              <ListItem
                icon={item.icon}
                title={item.title}
                subtitle={item.description}
              />
            ))}
          </StyledUl>
        </div>
      </Container>
    </StyledWhatRecommendsUs>
  );
}

export default ReasonsToChooseUs;
