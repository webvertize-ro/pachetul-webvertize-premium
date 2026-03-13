import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import FileInputButton from './FileInputButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
  faPaperclip,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import FilePreview from './FilePreview';

const StyledMessageSender = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: lightblue;
`;

const StyledInput = styled.input``;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;

const FileLabel = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

const InputFile = styled.input`
  display: none;
`;

function MessageSender({ mutateMsg, user, isSending, messages }) {
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
    if (file.type.startsWith('image/')) {
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
    console.log('data is: ', data);
    const message = {
      ...data,
      user_id: user.id,
      sender_type: 'user',
      document: attachment,
    };
    console.log('prepared message: ', message);
    mutateMsg(message);
    clearAttachment();
    reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <StyledMessageSender>
      {/* File Preview */}
      <FilePreview
        attachment={attachment}
        onAttachment={setAttachment}
        previewUrl={previewUrl}
      />

      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        <StyledInput
          type="text"
          name="message"
          placeholder="Scrieți mesajul aici..."
          className="form-control"
          {...register('message')}
        />
        <div>
          <FileLabel htmlFor="document">
            <StyledFontAwesomeIcon icon={faPaperclip} />
          </FileLabel>
          <InputFile
            type="file"
            id="document"
            name="document"
            {...register('document')}
            onChange={(e) => handleSelectFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </StyledForm>
    </StyledMessageSender>
  );
}

export default MessageSender;
