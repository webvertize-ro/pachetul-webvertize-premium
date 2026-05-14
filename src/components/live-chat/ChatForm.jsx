import { QueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import styled from "styled-components";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 20;
`;

const StartConvoBtn = styled.button`
  border: none;
  background-color: #1e5128;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const CancelBtn = styled.button`
  border: none;
  background-color: #740a03;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

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
    <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Nume Complet" error={errors?.name?.message}>
        <input
          type="text"
          name="name"
          className="form-control"
          {...register("name", {
            required: "Numele este obligatoriu!",
          })}
        />
      </FormRow>
      <FormRow label="Număr de telefon" error={errors?.phone_number?.message}>
        <input
          type="text"
          name="phone_number"
          className="form-control"
          {...register("phone_number", {
            required: "Numărul de telefon este obligatoriu!",
          })}
        />
      </FormRow>
      <ActionButtons>
        <StartConvoBtn type="submit" disabled={isCreating}>
          Începe conversația
        </StartConvoBtn>
        <CancelBtn type="reset">Anulează</CancelBtn>
      </ActionButtons>
    </StyledForm>
  );
}

export default ChatForm;
