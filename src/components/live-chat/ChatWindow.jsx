import styled from "styled-components";
import ChatForm from "./ChatForm";
import ChatConversation from "./ChatConversation";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo";
import LoadingSpinner from "../LoadingSpinner";

const StyledChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 100%;
  right: 110%;
  z-index: 110;
  background: rgba(15, 47, 90, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 0.5px solid rgba(168, 212, 245, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  width: 360px;
  aspect-ratio: 1 / 1.2;

  @media (max-width: 576px) {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    border-radius: 16px 16px 0 0;
    aspect-ratio: unset;
    height: 85vh;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  flex: 1;
  border-bottom: 2px solid #1f7d53;
  padding: 0.75rem 1rem;
  background: rgba(11, 34, 64, 0.4);
`;

const ClosingButton = styled.button`
  border: none;
  background: transparent;
  margin-left: auto;
  color: rgba(168, 212, 245, 0.65);

  @media (min-width: 992px) {
    &:hover {
      color: #fff;
    }
  }
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

  if (isCreating)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

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
