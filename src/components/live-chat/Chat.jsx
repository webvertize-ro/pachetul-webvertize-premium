import styled from 'styled-components';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUser } from '../../services/apiUsers';
import LoadingSpinner from '../LoadingSpinner';
import { createUser } from '../../services/apiUsers';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { sendMessage } from '../../services/apiMessages';

const StyledChat = styled.div`
  position: fixed;
  bottom: 10%;
  right: 1.5rem;
`;

function Chat() {
  /**
   * This will include the ChatButton and the ChatWindow
   */
  const [chatOpen, setChatOpen] = useState(false);

  function handleChatOpen() {
    setChatOpen((o) => !o);
  }

  const userId = localStorage.getItem('userId');

  const { reset } = useForm();

  const queryClient = useQueryClient();
  // Creating a new user
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      reset();
      localStorage.setItem('userId', data[0].id);
    },
    onError: (error) => toast.error(error.message),
  });
  // Read the current user from the database
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
    select: (data) => data[0],
  });
  // Send the message
  const { mutate: mutateMsg, isLoading: isSending } = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
      reset();
    },
    onError: (error) => toast.error(error.message),
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <StyledChat>
      <ChatButton onChatOpen={handleChatOpen} />
      {chatOpen && (
        <ChatWindow
          user={user}
          mutate={mutate}
          mutateMsg={mutateMsg}
          isCreating={isCreating}
          onCloseWindow={() => setChatOpen(false)}
        />
      )}
    </StyledChat>
  );
}

export default Chat;
