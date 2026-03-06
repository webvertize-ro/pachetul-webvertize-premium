import styled from 'styled-components';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const StyledChat = styled.div`
  position: fixed;
  bottom: 10%;
  right: 1.5rem;
`;

function Chat() {
  /**
   * This will include the ChatButton and the ChatWindow
   */
  return (
    <StyledChat>
      <ChatButton />
      <ChatWindow />
    </StyledChat>
  );
}

export default Chat;
