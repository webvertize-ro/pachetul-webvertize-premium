import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledAnchor = styled.a`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  border-radius: 50%;
  color: #a8d4f5;
  border: 0.5px solid rgba(168, 212, 245, 0.2);
  background-color: rgba(15, 47, 90, 0.85);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  transition:
    background 0.2s ease,
    border-color 0.2s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0.75rem;
  position: relative;

  &:hover {
    background-color: rgba(26, 79, 138, 0.95);
    border-color: rgba(168 212, 245, 0.4);
  }
`;

function FacebookButton({ isOpenModal }) {
  return (
    <StyledAnchor
      href="https://www.facebook.com"
      target="_blank"
      isOpenModal={isOpenModal}
      aria-label="Click pentru a începe o conversație pe Facebook cu afacerea [Numele afacerii]"
    >
      <FontAwesomeIcon icon={faFacebookMessenger} />
    </StyledAnchor>
  );
}

export default FacebookButton;
