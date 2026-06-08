import { useForm } from "react-hook-form";
import styled from "styled-components";
import FileInputButton from "./FileInputButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FilePreview from "./FilePreview";
import LoadingSpinner from "../LoadingSpinner";

const StyledMessageSender = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  background-color: rgba(11, 34, 64, 0.6);
  border-top: 0.5px solid rgba(168, 212, 245, 0.12);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const ReplyToMessagePreview = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-left: 2px solid #3b82d4;
  border-radius: 4px;
  font-size: 0.8rem;
  color: rgba(168, 212, 245, 0.75);
  width: 100%;
  padding: 1rem;
  position: relative;
`;

const CancelReply = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: rgba(168, 212, 245, 0.15);
  border: 0.5px solid rgba(168, 212, 245, 0.2);
  color: rgba(168, 212, 245, 0.8);
  transition: background 0.2s ease;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;

  &:hover {
    background: rgba(168, 212, 245, 0.25);
  }
`;

const StyledFontAwesomeIconCancelBtn = styled(FontAwesomeIcon)`
  font-size: 0.75rem;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem;
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.06);
  border: 0.5px solid rgba(168, 212, 245, 0.2);
  border-radius: 8px;
  color: #fff;
  font-size: 0.875rem;
  padding: 6px 10px;

  &::placeholder {
    color: rgba(168, 212, 245, 0.35);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(96, 165, 232, 0.5);
    outline: none;
    box-shadow: none;
    color: #fff;
  }
`;

const SendingButton = styled.button`
  border: none;
  background-color: #1a4f8a;
  color: #e8f2ff;
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2563b0;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;

const FileLabel = styled.label`
  color: rgba(168, 212, 245, 0.6);
  font-size: 1.1rem;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const InputFile = styled.input`
  display: none;
`;

function MessageSender({
  mutateMsg,
  user,
  isSending,
  messages,
  replyMessage,
  onReplyMessage,
  onMessageHasImage,
}) {
  const [attachment, setAttachment] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  if (errors) {
    console.log(errors);
  }

  function handleSelectFile(file) {
    if (!file) return;
    setAttachment(file);
    console.log(attachment);
    // Create the URL for the image preview
    if (file.type.startsWith("image/")) {
      const fileURL = URL.createObjectURL(file);
      setPreviewUrl(fileURL);
    } else {
      setPreviewUrl(null);
    }
  }

  function clearAttachment() {
    setAttachment(null);
    setPreviewUrl(null);
  }

  function onSubmit(data) {
    onMessageHasImage(attachment?.type?.startsWith("image/") || false);
    const message = {
      ...data,
      user_id: user.id,
      sender_type: "user",
      document: attachment,
      reply_to_message_id: replyMessage?.id || null,
    };

    console.log("prepared message is: ", message);

    mutateMsg(message);
    clearAttachment();
    onReplyMessage(null);
    reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <StyledMessageSender>
      {replyMessage && (
        <ReplyToMessagePreview>
          <CancelReply onClick={() => onReplyMessage(null)}>
            <StyledFontAwesomeIconCancelBtn icon={faXmark} />
          </CancelReply>
          <strong>Raspuns pentru: </strong>
          {/* Render image */}
          {replyMessage.has_image && (
            <img src={replyMessage.document} width="60" className="img-fluid" />
          )}

          {/* Render document (if has_image is false) */}
          {!replyMessage.has_image && (
            <a href={replyMessage.document}>{replyMessage.document_name}</a>
          )}

          {/* Render text */}
          {replyMessage.message && <div>{replyMessage.message}</div>}
        </ReplyToMessagePreview>
      )}

      {/* File Preview */}
      <FilePreview
        attachment={attachment}
        onAttachment={setAttachment}
        previewUrl={previewUrl}
      />

      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Attachment */}
        <div>
          <FileLabel htmlFor="document">
            <StyledFontAwesomeIcon icon={faPaperclip} />
          </FileLabel>
          <InputFile
            type="file"
            id="document"
            name="document"
            {...register("document")}
            onChange={(e) => handleSelectFile(e.target.files[0])}
          />
        </div>

        {/* Text */}
        <div>
          <StyledInput
            type="text"
            name="message"
            placeholder="Scrieți mesajul aici..."
            className="form-control"
            {...register("message")}
          />
        </div>

        {/* Sending button */}
        <div>
          <SendingButton type="submit">
            {isSending ? (
              <LoadingSpinner />
            ) : (
              <FontAwesomeIcon icon={faPaperPlane} />
            )}
          </SendingButton>
        </div>
      </StyledForm>
    </StyledMessageSender>
  );
}

export default MessageSender;
