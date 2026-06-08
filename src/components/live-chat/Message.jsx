import {
  faFile,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";

const FileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  max-width: 150px;
  overflow-wrap: break-word;
  color: #a8d4f5;
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.75);
    }
  }

  &:hover ${StyledFontAwesomeIcon} {
    display: block;
  }
`;

const TextMessage = styled.div`
  font-size: 0.875rem;
  display: flex;
  justify-content: flex-start;
`;

const Date = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(168, 212, 245, 0.45);
  display: flex;
  justify-content: flex-start;
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1 / 1.2;
  object-fit: cover;
`;

const ReplyMessageContainer = styled.div`
  padding-left: 1rem;
  border: 2px solid lime;
`;

const ReplyBox = styled.div`
  margin-bottom: 0.4rem;
  padding: 0.4rem 0.5rem;
  border-left: 2px solid #3b82d4;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0 4px 4px 0;
  font-size: 0.75rem;
  color: rgba(168, 212, 245, 0.7);
  padding: 0.4rem 0.5rem;
`;

function Message({ msg, messages, replyMessage, datePrepared }) {
  const referencedMsg = msg.reply_to_message_id
    ? messages.find((m) => m.id === msg.reply_to_message_id)
    : null;

  /**
   * 
   * Re-done logic:
   * 
   * if image, check if there is also a message
   *    - if also a message, display both
   *    - if not, display just the image
   * if not, check if there is document_name
   *    - check if also a message
   *        - if also a message, display both (link and message)
   *    - if not, display only the link
   * if not, display only the message
   * Structure of msg:
    document: "https://ebsaptaehndiwvjdbqnm.supabase.co/storage/v1/object/public/documents/0.23873187614896663-a4_poster.pdf"
    document_name: "a4_poster.pdf"
    has_image: false
    id: 169
    message: ""
    sender_type: "user"
    user_id: 51
   * 
   */
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const imageMessages = messages.filter((msg) => msg.has_image && msg.document);

  const slides = imageMessages.map((m) => ({
    src: m.document,
    alt: m.document_name,
  }));

  // const imageMessages = messages.filter((img) => );

  if (msg.has_image) {
    // Images & Message
    if (msg.message) {
      return (
        <div>
          <ImageContainer
            onClick={() => {
              const index = imageMessages.findIndex(
                (i) => i.document === msg.document,
              );

              setLightboxIndex(index);
              setOpen(true);
            }}
          >
            <StyledFontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            <StyledImg src={msg.document} className="img-fluid" width="120" />
          </ImageContainer>
          <TextMessage>{msg.message}</TextMessage>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={lightboxIndex}
          />
          <Date>{datePrepared}</Date>
        </div>
      );
    } else {
      // Plain Images
      return (
        <>
          <ImageContainer
            onClick={() => {
              const index = imageMessages.findIndex(
                (i) => i.document === msg.document,
              );

              setLightboxIndex(index);
              setOpen(true);
            }}
          >
            <StyledFontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            <StyledImg
              src={msg.document}
              className="img-fluid"
              width="120"
              onClick={() => {
                const index = imageMessages.findIndex(
                  (i) => i.document === msg.document,
                );
                setLightboxIndex(index);
                setOpen(true);
              }}
            />
            {/* Reply to an image */}
          </ImageContainer>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={lightboxIndex}
          />
          <Date>{datePrepared}</Date>
        </>
      );
    }
  } else if (msg.document_name) {
    // Documents || Documents & Message
    if (msg.message) {
      return (
        <div>
          <FileLink href={msg.document} target="_blank">
            <FontAwesomeIcon icon={faFile} />
            {msg.document_name}
          </FileLink>
          <TextMessage>{msg.message}</TextMessage>
          <Date>{datePrepared}</Date>
        </div>
      );
    } else {
      return (
        <>
          <FileLink href={msg.document} target="_blank">
            <FontAwesomeIcon icon={faFile} />
            {msg.document_name}
          </FileLink>
          <Date>{datePrepared}</Date>
        </>
      );
    }
  }

  return (
    <div>
      {/* Reply to text */}
      {referencedMsg && !referencedMsg.document && referencedMsg.message && (
        <>
          <ReplyBox>{referencedMsg.message}</ReplyBox>
        </>
      )}
      {/* Reply to doc (no text)*/}
      {referencedMsg && !referencedMsg.has_image && !referencedMsg.message && (
        <>
          <ReplyBox>
            <a href={referencedMsg.document} target="_blank">
              {referencedMsg.document_name}
            </a>
          </ReplyBox>
        </>
      )}

      {/* Reply to doc + text */}
      {referencedMsg &&
        !referencedMsg.has_image &&
        referencedMsg.document &&
        referencedMsg.message && (
          <>
            <ReplyBox>
              <a href={referencedMsg.document} target="_blank">
                {referencedMsg.document_name}
              </a>
              <div>{referencedMsg.message}</div>
            </ReplyBox>
          </>
        )}

      {/* Reply to image (no text) */}
      {referencedMsg && referencedMsg.has_image && !referencedMsg.message && (
        <>
          <ReplyBox>
            <img
              src={referencedMsg.document}
              width="80"
              className="img-fluid"
            />
          </ReplyBox>
        </>
      )}

      {/* Reply to image + text */}
      {referencedMsg && referencedMsg.has_image && referencedMsg.message && (
        <>
          <ReplyBox>
            <img
              src={referencedMsg.document}
              width="80"
              className="img-fluid"
            />
            <div>{referencedMsg.message}</div>
          </ReplyBox>
        </>
      )}
      {/* Actual text message */}
      <TextMessage>{msg.message}</TextMessage>
      <Date>{datePrepared}</Date>
    </div>
  );
}
export default Message;
