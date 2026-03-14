import { faReply, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import React from 'react';
import Logo from '../Logo';

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
  position: relative;
`;

const ReplyToIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 110;
  font-size: 1rem;
  border: 1px solid lime;
  background-color: #fff;
`;

const UserName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
  font-weight: 800;
  font-size: 0.9rem;
  border: 2px solid lime;
`;

function MessageBubble({
  message,
  user,
  children,
  onReplyMessage,
  replyMessage,
  messages,
}) {
  const months = [
    'Ian',
    'Feb',
    'Mar',
    'Apr',
    'Mai',
    'Iun',
    'Iul',
    'Aug',
    'Sep',
    'Oct',
    'Noi',
    'Dec',
  ];
  let date = new Date(message.created_at);
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Europe/Bucharest',
  };
  const datePrepared = date.toLocaleDateString('RO', options);

  return (
    <StyledMessageBubble $isAdmin={message.sender_type}>
      <ReplyToIcon onClick={() => onReplyMessage(message)}>
        <FontAwesomeIcon icon={faReply} />
      </ReplyToIcon>
      <UserName>
        {message.sender_type === 'user' ? (
          <div>
            <FontAwesomeIcon icon={faUser} />
            {user.name}
          </div>
        ) : (
          <div>
            <Logo width="50" />
            Numele afacerii
          </div>
        )}
      </UserName>
      {React.cloneElement(children, { replyMessage, datePrepared })}
    </StyledMessageBubble>
  );
}

export default MessageBubble;
