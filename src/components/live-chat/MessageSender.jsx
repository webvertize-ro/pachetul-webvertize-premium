import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin-top: auto;
  width: 100%;
`;

function MessageSender({ mutateMsg, user }) {
  const { register, handleSubmit, reset, formState } = useForm();

  function onSubmit(data) {
    const message = {
      ...data,
      user_id: user.id,
      sender_type: 'user',
    };
    mutateMsg(message);
    reset();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
      <input
        type="text"
        name="message"
        placeholder="Scrieți mesajul aici..."
        {...register('message')}
      />
      <button type="submit">Send</button>
    </StyledForm>
  );
}

export default MessageSender;
