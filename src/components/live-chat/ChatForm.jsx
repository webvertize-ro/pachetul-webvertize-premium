import { QueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import styled from "styled-components";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 20;
  padding: 1rem 2rem;
  @media (max-width: 576px) {
    padding: 0.5rem 1rem;
  }
`;

const WelcomeH3 = styled.h3`
  color: #e8f2ff;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;

const StyledP = styled.p`
  color: #e8f2ff;
  text-align: center;
  margin: 0 auto;
  font-size: 0.8rem;
  font-weight: 500;
`;

const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.06);
  color: #fff;
  border-radius: 6px;

  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(96, 165, 232, 0.6);
    color: #fff;
    box-shadow: none;
    outline: none;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const StartConvoBtn = styled.button`
  border: none;
  background-color: #1a4f8a;
  color: #e8f2ff;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  border-radius: 0.5rem;

  &:hover {
    background-color: #2563b0;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;

const CancelBtn = styled.button`
  border: 0.5px solid rgba(168, 212, 245, 0.25);
  background-color: transparent;
  color: rgba(168, 212, 245, 0.7);
  padding: 10px;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: rgba(168, 212, 245, 0.6);
    color: #fff;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
      <div>
        <WelcomeH3>Bun venit pe chat!</WelcomeH3>
        <StyledP>
          Completați formularul de mai jos pentru a începe o conversație live.
        </StyledP>
      </div>
      <FormRow label="Nume Complet" error={errors?.name?.message}>
        <StyledInput
          type="text"
          name="name"
          className="form-control"
          {...register("name", {
            required: "Numele este obligatoriu!",
          })}
        />
      </FormRow>
      <FormRow label="Număr de telefon" error={errors?.phone_number?.message}>
        <StyledInput
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
