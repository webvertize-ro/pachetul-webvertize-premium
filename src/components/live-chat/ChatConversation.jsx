import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import MessageSender from './MessageSender';
import Conversations from './Conversations';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMessages, subscribeToMessages } from '../../services/apiMessages';
import { useEffect } from 'react';
import supabase from '../../services/supabase';

const StyledChatConversation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function ChatConversation({ user, mutateMsg, mutateFile, isSending }) {
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

  const queryClient = useQueryClient();

  // Initial fetch via React Query
  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages', user.id],
    queryFn: () => getMessages(user.id),
  });

  // Subscription to keep cache up to date
  useEffect(() => {
    const channel = subscribeToMessages(user.id, (payload) => {
      queryClient.setQueryData(['messages', user.id], (old = []) => {
        return [...old, payload.new];
      });
    });

    // Cleanup on unmount
    return () => supabase.removeChannel(channel);
  }, [user.id, queryClient]);

  return (
    <StyledChatConversation>
      {/* Conversations */}
      <Conversations user={user} isLoading={isLoading} messages={messages} />
      {/* MessageSender */}
      <MessageSender
        mutateMsg={mutateMsg}
        user={user}
        mutateFile={mutateFile}
        isSending={isSending}
        messages={messages}
      />
    </StyledChatConversation>
  );
}

export default ChatConversation;
