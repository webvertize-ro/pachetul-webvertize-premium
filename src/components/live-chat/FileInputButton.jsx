import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;

const StyledInput = styled.input`
  display: none;
`;

function FileInputButton() {
  return (
    <div>
      <label>
        <StyledFontAwesomeIcon icon={faPaperclip} />
      </label>
      <StyledInput type="file" id="file" name="file" />
    </div>
  );
}

export default FileInputButton;
