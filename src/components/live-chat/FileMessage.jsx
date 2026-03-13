import {
  faFile,
  faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import Lightbox from 'yet-another-react-lightbox';

const FileLink = styled.a`
  max-width: 150px;
  overflow-wrap: break-word;
  position: relative;
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
      content: '';
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

const StyledImg = styled.img`
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1.2;
  object-fit: cover;
`;

function FileMessage({ msg, slides, messages }) {
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

  if (msg.has_image) {
    // Images & Message || Images
    if (msg.message) {
      return (
        <div>
          <ImageContainer
            onClick={() => {
              const index = messages.findIndex(
                (i) => i.document === msg.document,
              );
              console.log('index: ', index);
              setLightboxIndex(index);
              setOpen(true);
            }}
          >
            <StyledFontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            <StyledImg src={msg.document} className="img-fluid" width="120" />
          </ImageContainer>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={lightboxIndex}
          />
          <div>{msg.message}</div>
        </div>
      );
    } else {
      return (
        <>
          <ImageContainer
            onClick={() => {
              const index = messages.findIndex(
                (i) => i.document === msg.document,
              );
              console.log('index: ', index);
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
                const index = messages.findIndex(
                  (i) => i.document === msg.document,
                );
                setLightboxIndex(index);
                setOpen(true);
              }}
            />
          </ImageContainer>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={lightboxIndex}
          />
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
          <div>{msg.message}</div>
        </div>
      );
    } else {
      return (
        <FileLink href={msg.document} target="_blank">
          <FontAwesomeIcon icon={faFile} />
          {msg.document_name}
        </FileLink>
      );
    }
  }

  return <div>{msg.message}</div>;
}
export default FileMessage;
