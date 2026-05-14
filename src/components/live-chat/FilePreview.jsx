import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledFilePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(92, 118, 109, 0.15);
  width: 100%;
  position: relative;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #fff;
`;

const StyledImg = styled.img`
  width: 120px;
`;

const ClosingButton = styled.button`
  position: absolute;
  border: none;
  background: transparent;
  top: 0;
  right: 0;
`;

const FileName = styled.div`
  max-width: 100%;
  overflow-wrap: break-word;
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
