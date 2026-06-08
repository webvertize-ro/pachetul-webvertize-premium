import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMessages, subscribeToMessages } from "../../services/apiMessages";
import { useEffect, useRef } from "react";
import supabase from "../../services/supabase";
import MessageBubble from "./MessageBubble";
import styled from "styled-components";
import Message from "./Message";
import { useFetcher } from "react-router";
import LoadingSpinner from "../LoadingSpinner";

const StyledConversations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: auto;
  max-height: 100%;
  padding: 1rem 0.75rem;
  height: 90%;
  background: rgba(7, 20, 38, 0.3);

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(168, 212, 245, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(168, 212, 245, 0.4);
  }
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
  // const slides = messages
  //   ?.map((m) => m.document)
  //   .filter((m) => m !== null)
  //   .map((el) => {
  //     return { src: el };
  //   });

  const ref = useRef(null);

  function scrollToBottom() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
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

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

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
          <Message msg={msg} messages={messages} />
        </MessageBubble>
      ))}
      <InvisibleDiv ref={ref}></InvisibleDiv>
    </StyledConversations>
  );
}

export default Conversations;
