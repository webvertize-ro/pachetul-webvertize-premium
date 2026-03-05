import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css, keyframes } from 'styled-components';

const wave = keyframes`
  0%{
    opacity: 0.8;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.3);
  }
`;

const StyledAnchor = styled.a`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  border-radius: 50%;
  color: #128c7e;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0.75rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: ${(props) => (props.isOpenModal ? 'none' : '4px solid #bfc6c4')};
    animation: ${(props) =>
      props.isOpenModal
        ? 'none'
        : css`
            ${wave} 2s ease-out infinite
          `};
  }
`;

function WhatsAppButton({ isOpenModal }) {
  return (
    <StyledAnchor
      href="https://wa.me/+40750419349"
      target="_blank"
      isOpenModal={isOpenModal}
      aria-label="Click pentru a începe o conversație pe WhatsApp cu [Numele Afacerii]"
    >
      <FontAwesomeIcon icon={faWhatsappSquare} />
    </StyledAnchor>
  );
}

export default WhatsAppButton;
