import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMessages, subscribeToMessages } from '../../services/apiMessages';
import { useEffect, useRef } from 'react';
import supabase from '../../services/supabase';
import MessageBubble from './MessageBubble';
import styled from 'styled-components';
import Message from './Message';
import { useFetcher } from 'react-router';

const StyledConversations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;
  max-height: 100%;
  padding: 1rem 0;
  border: 1px solid red;
  height: 90%;
`;

const InvisibleDiv = styled.div`
  /* margin-top: auto; */
`;

function Conversations({
  user,
  isLoading,
  messages,
  onReplyMessage,
  replyMessage,
  messageHasImage,
}) {
  /**
   * 
   * slides={[
          { src: "/image1.jpg" },
          { src: "/image2.jpg" },
          { src: "/image3.jpg" },
        ]}
   * 
   */
  const slides = messages
    ?.map((m) => m.document)
    .filter((m) => m !== null)
    .map((el) => {
      return { src: el };
    });

  const ref = useRef(null);

  function scrollToBottom() {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const timer = setTimeout(
      () => {
        scrollToBottom();
      },
      messageHasImage ? 1500 : 0,
    );

    return () => clearTimeout(timer);
  }, [messages]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <StyledConversations>
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg}
          user={user}
          onReplyMessage={onReplyMessage}
          replyMessage={replyMessage}
          messages={messages}
        >
          <Message msg={msg} slides={slides} messages={messages} />
        </MessageBubble>
      ))}
      <InvisibleDiv ref={ref}></InvisibleDiv>
    </StyledConversations>
  );
}

export default Conversations;
