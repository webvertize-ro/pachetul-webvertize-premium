import styled from 'styled-components';

const StyledMessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-self: ${(props) =>
    props.$isAdmin === 'admin' ? 'self-start' : 'self-end'};
  background-color: ${(props) =>
    props.$isAdmin === 'admin' ? 'lightgreen' : 'yellow'};
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

function MessageBubble({ message, user, children }) {
  return (
    <StyledMessageBubble $isAdmin={message.sender_type}>
      {children}
    </StyledMessageBubble>
  );
}

export default MessageBubble;
