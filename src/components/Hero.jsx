import Modal from "./Modal";
import styled from "styled-components";
import Form from "./Form";
import { Link } from "react-router";

const StyledHero = styled.div`
  background-image: url(${(props) => props.heroBg});
  background-position: center;
  position: relative;
  z-index: 10;
  padding: 8rem 0;

  &:after {
    content: "";
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(11, 34, 64, 0.55) 0%,
      rgba(11, 34, 64, 0.75) 100%
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 576px) {
    padding: 2rem 0;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 1.5rem 0;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 12;
  color: #fff;
`;

const StyledH2 = styled.h2`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 500;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 1.05rem;
  max-width: 600px;
  color: rgba(168, 212, 245, 0.85);
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
  }
`;

const Button = styled(Link)`
  background: transparent;
  text-decoration: none;
  border: 0.5px solid rgba(96, 165, 232, 0.45);
  color: rgba(168, 212, 245, 0.85);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  padding: 12px 28px;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  @media (min-width: 992px) {
    &:hover {
      border-color: rgba(96, 165, 232, 0.9);
      color: #fff;
      background: transparent;
    }
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

function Hero({ heroBg, heroTitle, heroDesc, ctaBtn = true }) {
  return (
    <StyledHero heroBg={heroBg}>
      <div className="container">
        <TextContent>
          <StyledH2>{heroTitle}</StyledH2>
          <StyledP>{heroDesc}</StyledP>
          {ctaBtn && (
            <Modal>
              <Modal.Open opens="form-modal">
                <Button>Cere o ofertă de preț</Button>
              </Modal.Open>
              <Modal.Window name="form-modal" bgColor="rgba(59, 94, 117, 0.5)">
                <Form />
              </Modal.Window>
            </Modal>
          )}
        </TextContent>
      </div>
    </StyledHero>
  );
}

export default Hero;
