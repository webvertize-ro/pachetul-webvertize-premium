import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledStickyButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  position: fixed;
  bottom: 30%;
  right: 0;
  z-index: 1000;

  @media (max-width: 576px) {
    bottom: 5%;
  }
`;

const WhatsApp = styled.a`
  text-decoration: none;
  display: flex;
  color: #fff;
  font-size: 2.5rem;
  background-color: #fff;
  padding: 0.2rem 0;
  border-radius: 0.5rem;
`;

const Phone = styled.a`
  display: flex;
  font-size: 2.5rem;
  color: #fff;
  background-color: #fff;
  padding: 0.2rem 0;
  border-radius: 0.5rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.icon === faWhatsappSquare ? '#128c7e' : '#1F7D53'};
`;

function StickyButtons() {
  return (
    <StyledStickyButtons>
      {/* WhatsApp */}
      <WhatsApp
        href="https://wa.me/+40750419349"
        target="_blank"
        aria-label="Începe o conversație pe WhatsApp"
      >
        <StyledFontAwesomeIcon icon={faWhatsappSquare} />
      </WhatsApp>
      {/* Phone */}
      <Phone href="tel:+40750419349" target="_blank" aria-label="Sună direct">
        <StyledFontAwesomeIcon icon={faSquarePhone} />
      </Phone>
    </StyledStickyButtons>
  );
}

export default StickyButtons;
