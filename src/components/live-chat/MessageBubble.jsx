import { faReply, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import React from "react";
import Logo from "../Logo";

const StyledMessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-self: ${(props) =>
    props.$isAdmin === "admin" ? "self-start" : "self-end"};
  background-color: ${(props) =>
    props.$isAdmin === "admin" ? "#1F7D53" : "#16476A"};
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
`;

const ReplyToIcon = styled.div`
  position: absolute;
  top: -10px;
  left: -5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  z-index: 110;
  font-size: 0.75rem;
  background-color: #393e46;
  opacity: 0;
  transition: all 0.2s ease;

  ${StyledMessageBubble}:hover & {
    opacity: 1;
  }
`;

const UserName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
  font-weight: 800;
  font-size: 0.9rem;
`;

const UserNameInner = styled.div`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const UserNameLogo = styled.div`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25rem;
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
    "Ian",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Iun",
    "Iul",
    "Aug",
    "Sep",
    "Oct",
    "Noi",
    "Dec",
  ];
  let date = new Date(message.created_at);
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Europe/Bucharest",
  };
  const datePrepared = date.toLocaleDateString("RO", options);

  return (
    <StyledMessageBubble $isAdmin={message.sender_type}>
      <ReplyToIcon onClick={() => onReplyMessage(message)}>
        <FontAwesomeIcon icon={faReply} />
      </ReplyToIcon>
      <UserName>
        {message.sender_type === "user" ? (
          <UserNameInner>
            <FontAwesomeIcon icon={faUser} />
            {user.name}
          </UserNameInner>
        ) : (
          <UserNameLogo>
            <Logo width="50" />
            Numele afacerii
          </UserNameLogo>
        )}
      </UserName>
      {React.cloneElement(children, { replyMessage, datePrepared })}
    </StyledMessageBubble>
  );
}

export default MessageBubble;
