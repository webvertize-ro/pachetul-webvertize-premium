import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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
  return (
    <StyledCookiesInfoSection>
      <div className="container">
        <StyledH3>
          <InfoIcon icon={faInfoCircle} />
          Informații suplimentare și actualizări
        </StyledH3>
        <StyledP>
          Această pagină a fost actualizată ultima dată la{" "}
          <Date>30 ianuarie 2026</Date>.
        </StyledP>
        <StyledP>
          Ne rezervăm dreptul de a modifica sau actualiza acest conținut ori de
          câte ori este necesar, pentru a reflecta schimbări în funcționalitatea
          website-ului sau în cerințele legale aplicabile.
        </StyledP>
        <StyledP>
          Dacă ai întrebări legate de protecția datelor tale sau de conținutul
          acestei pagini, ne poți contacta oricând la adresa de email:{" "}
          <StyledLink href="mailto:gdpr@afacere_locala.ro" target="_blank">
            gdpr@afacere_locala.ro
          </StyledLink>
        </StyledP>
        <StyledP>
          Vom răspunde solicitărilor tale în cel mai scurt timp posibil, în
          conformitate cu legislația în vigoare privind protecția datelor.
        </StyledP>
      </div>
    </StyledCookiesInfoSection>
  );
}

export default CookiesInfoSection;
