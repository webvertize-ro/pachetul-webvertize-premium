import styled from "styled-components";
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo";

const StyledChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 100%;
  right: 110%;
  z-index: 110;
  background-color: #fff;
  border-radius: 0.5rem;
  width: 350px;
  aspect-ratio: 1 / 1.2;

  @media (max-width: 576px) {
    right: 75%;
    bottom: 110%;
    width: 275px;
    aspect-ratio: 1 / 1.5;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  flex: 1;
  border-bottom: 2px solid #1f7d53;
  padding: 0.5rem;
`;

const ClosingButton = styled.button`
  border: none;
  background: transparent;
  margin-left: auto;
`;

function ChatWindow({
  user,
  mutateMsg,
  isCreating,
  onCloseWindow,
  mutate,
  mutateFile,
  isSending,
}) {
  /**
   * This component should display either the form (if there is no userId in localStorage) or the chat conversation
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
      <ChatHeader>
        <Logo dark="true" width="100" />
        <ClosingButton onClick={() => onCloseWindow()}>
          <FontAwesomeIcon icon={faWindowMinimize} />
        </ClosingButton>
      </ChatHeader>

      {!user ? (
        <ChatForm mutate={mutate} user={user} isCreating={isCreating} />
      ) : (
        <ChatConversation
          isSending={isSending}
          user={user}
          mutateMsg={mutateMsg}
          mutateFile={mutateFile}
        />
      )}
    </StyledChatWindow>
  );
}

export default ChatWindow;
