import styled from 'styled-components';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUser } from '../../services/apiUsers';
import LoadingSpinner from '../LoadingSpinner';
import { createUser } from '../../services/apiUsers';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const StyledChat = styled.div`
  position: fixed;
  bottom: 10%;
  right: 1.5rem;
`;

function Chat() {
  /**
   * This will include the ChatButton and the ChatWindow
   */

  const userId = localStorage.getItem('userId');

  const { reset } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      reset();
      localStorage.setItem('userId', data[0].id);
    },
    onError: (error) => toast.error(error.message),
  });

  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUser(userId),
    select: (data) => data[0],
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <StyledChat>
      <ChatButton />
      <ChatWindow user={user} mutate={mutate} isCreating={isCreating} />
    </StyledChat>
  );
}

export default Chat;
