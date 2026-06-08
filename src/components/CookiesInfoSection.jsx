import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledCookiesInfoSection = styled.div`
  padding: 5rem 0;
  background-color: #0b2240;
  color: #fff;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);

  @media (max-width: 576px) {
    padding: 3rem 0;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 3rem 0;
  }
`;

const StyledH3 = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.01em;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: left;
  }
`;

const InfoIcon = styled(FontAwesomeIcon)`
  font-size: 0.9rem;
  color: #60a5e8;
  flex-shrink: 0;
`;

const StyledLink = styled.a`
  font-weight: 500;
  color: #60a5e8;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const StyledP = styled.p`
  font-size: 0.95rem;
  color: rgba(168, 212, 245, 0.75);
  font-weight: 300;
  line-height: 1.75;
  max-width: 680px;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Date = styled.span`
  text-decoration: underline;
  text-decoration-color: rgba(168, 212, 245, 0.4);
  color: #fff;
`;

function CookiesInfoSection() {
  const { contentMap } = useContent();

  return (
    <StyledCookiesInfoSection>
      <div className="container">
        <StyledH3>
          <InfoIcon icon={faInfoCircle} />
          {c(contentMap, "cookies.info_title")}
        </StyledH3>
        <StyledP>
          {c(contentMap, "cookies.info_paragraph_1")}{" "}
          <Date>{c(contentMap, "cookies.info_paragraph_1_date")}</Date>.
        </StyledP>
        <StyledP>{c(contentMap, "cookies.info_paragraph_2")}</StyledP>
        <StyledP>
          {c(contentMap, "cookies.info_paragraph_3")}{" "}
          <StyledLink href="mailto:gdpr@afacere_locala.ro" target="_blank">
            {c(contentMap, "cookies.info_paragraph_3_email")}
          </StyledLink>
        </StyledP>
        <StyledP>{c(contentMap, "cookies.info_paragraph_4")}</StyledP>
      </div>
    </StyledCookiesInfoSection>
  );
}

export default CookiesInfoSection;
