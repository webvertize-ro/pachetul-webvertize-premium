import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const StyledChatWidget = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 50%;
  background-color: rgb(31, 125, 83);
  z-index: 110;
  border: 2px solid rgba(255, 255, 255, 0.9);
  cursor: pointer;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #fff;
`;

function ChatButton({ onChatOpen }) {
  return (
    <StyledChatWidget onClick={() => onChatOpen()}>
      <StyledFontAwesomeIcon icon={faComments} />
    </StyledChatWidget>
  );
}

export default ChatButton;
