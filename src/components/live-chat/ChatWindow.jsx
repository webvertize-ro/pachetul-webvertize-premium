import styled from 'styled-components';
import ChatForm from './ChatForm';

const StyledChatWindow = styled.div`
  position: absolute;
  bottom: 100%;
  right: 110%;
  z-index: 110;
  border: 1px solid lime;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 300px;
  aspect-ratio: 1 / 1;
`;

function ChatWindow() {
  /**
   * This component should display either the form (is there is no userId in localStorage) or the chat conversation
   *    1. We will implement the Form first
   *    2. We will implement the ChatConversation as well
   */
  return (
    <StyledChatWindow>
      <ChatForm />
    </StyledChatWindow>
  );
}

export default ChatWindow;
