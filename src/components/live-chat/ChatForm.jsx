import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createUser, getUser } from '../../services/apiUsers';
import toast from 'react-hot-toast';
import FormRow from './FormRow';

function ChatForm({ user, isCreating, mutate }) {
  /**
   *  This component will submit data to the table "users"
   *  It will use react-hook-form
   *
   */
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Nume" error={errors?.name?.message}>
        <input
          type="text"
          name="name"
          className="form-control"
          {...register('name', {
            required: 'Numele este obligatoriu!',
          })}
        />
      </FormRow>
      <FormRow label="Număr de telefon" error={errors?.phone_number?.message}>
        <input
          type="text"
          name="phone_number"
          className="form-control"
          {...register('phone_number', {
            required: 'Numărul de telefon este obligatoriu!',
          })}
        />
      </FormRow>
      <div className="">
        <button type="submit" disabled={isCreating}>
          Incepe conversatia
        </button>
        <button type="reset">Anulează</button>
      </div>
    </form>
  );
}

export default ChatForm;
