import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const wave = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`;

const StyledChatWidget = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 110;
  cursor: pointer;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: ${(props) => (props.chatOpen ? "none" : "4px solid #bfc6c4")};
    animation: ${(props) =>
      props.chatOpen
        ? "unset"
        : css`
            ${wave} 2s ease-out infinite
          `};
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #1f7d53;
`;

function ChatButton({ onChatOpen, chatOpen }) {
  return (
    <StyledChatWidget onClick={() => onChatOpen()} chatOpen={chatOpen}>
      <StyledFontAwesomeIcon icon={faComments} />
    </StyledChatWidget>
  );
}

export default ChatButton;
