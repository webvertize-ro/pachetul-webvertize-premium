import styled from 'styled-components';
import ChatForm from './ChatForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../../services/apiUsers';
import toast from 'react-hot-toast';
import ChatConversation from './ChatConversation';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledChatWindow = styled.div`
  position: absolute;
  bottom: 100%;
  right: 110%;
  z-index: 110;
  border: 1px solid lime;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 350px;
  aspect-ratio: 1 / 1.2;
`;

const ClosingButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background: transparent;
`;

function ChatWindow({ user, mutateMsg, isCreating, onCloseWindow, mutate }) {
  /**
   * This component should display either the form (is there is no userId in localStorage) or the chat conversation
   *    1. We will implement the Form first
   *    2. We will implement the ChatConversation as well
   */

  // const { id: userId, name, phone_number } = users[0];
  // console.log(name);
  // console.log(phone_number);

  // const queryClient = useQueryClient();

  // const { isLoading: isDeleting, mutate } = useMutation({
  //   mutationFn: deleteUser,
  //   onSuccess: () => {
  //     toast.success('User successfully deleted!');

  //     queryClient.invalidateQueries({
  //       queryKey: ['users'],
  //     });
  //   },
  //   onError: (err) => toast.error(err.message),
  // });

  if (isCreating) return <div>Loading...</div>;

  return (
    <StyledChatWindow>
      {/* {users.map((user) => (
        <div className="border" key={user.id}>
          <div>{user.name}</div>
          <div>{user.phone_number}</div>
          <button onClick={() => mutate(userId)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      ))} */}
      <ClosingButton onClick={() => onCloseWindow()}>
        <FontAwesomeIcon icon={faWindowMinimize} />
      </ClosingButton>

      {!user ? (
        <ChatForm mutate={mutate} user={user} isCreating={isCreating} />
      ) : (
        <ChatConversation user={user} mutateMsg={mutateMsg} />
      )}
    </StyledChatWindow>
  );
}

export default ChatWindow;
