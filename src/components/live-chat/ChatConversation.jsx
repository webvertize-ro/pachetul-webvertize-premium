import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import MessageSender from './MessageSender';

const StyledChatConversation = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid orange;
  display: flex;
  flex-direction: column;
`;

function ChatConversation({ user, mutateMsg }) {
  /**
   * The structure of the comopnent is:
   * 1. Conversation (with all the fetched messages)
   * 2. MessageSender (to send a message)
   */

  /**
   * The structure of the message object should be:
   * {
   *  user_id: x,
   *  message: "abc",
   *  sender_type: "user"
   * }
   *
   */

  return (
    <StyledChatConversation>
      {/* Conversations */}
      <div>
        <div>message1</div>
        <div>message2</div>
        <div>message3</div>
        <div>message4</div>
        <div>message5</div>
      </div>
      {/* MessageSender */}
      <MessageSender mutateMsg={mutateMsg} user={user} />
    </StyledChatConversation>
  );
}

export default ChatConversation;
