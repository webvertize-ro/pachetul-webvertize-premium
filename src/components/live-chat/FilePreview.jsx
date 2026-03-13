import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons';

const StyledFilePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: lightgrey;
  width: 100%;
  position: relative;
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

      {attachment.type.startsWith('image/') ? (
        <div>
          <img src={previewUrl} width="60" className="img-fluid" />
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
