import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledFilePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  width: 100%;
  position: relative;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.5px solid rgba(168, 212, 245, 0.2);
`;

const StyledImg = styled.img`
  width: 120px;
`;

const ClosingButton = styled.button`
  position: absolute;
  border: none;
  background: transparent;
  top: 4px;
  right: 4px;
  color: rgba(168, 212, 245, 0.6);
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const FileName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  max-width: 100%;
  overflow-wrap: break-word;
  color: rgba(168, 212, 245, 0.8);
  font-size: 0.8rem;
`;

function FilePreview({ attachment, onAttachment, previewUrl }) {
  if (!attachment) return null;

  return (
    <StyledFilePreview>
      <ClosingButton
        onClick={() => {
          onAttachment(null);
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </ClosingButton>

      {attachment.type.startsWith("image/") ? (
        <div>
          <StyledImg src={previewUrl} className="img-fluid" />
        </div>
      ) : (
        <FileName>
          <FontAwesomeIcon icon={faFile} />
          <div>{attachment.name}</div>
        </FileName>
      )}
    </StyledFilePreview>
  );
}

export default FilePreview;
