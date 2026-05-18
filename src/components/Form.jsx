import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

const StyledForm = styled.form`
  border-radius: 12px;
  @media (max-width: 576px) {
    width: unset;
    padding: 1rem 2rem;
  }
  width: 400px;
  padding: 2rem 3rem;
`;

const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.06);
  color: #fff;
  border: 0.5px solid rgba(168, 212, 245, 0.25);

  &:focus {
    background-color: rgba(74, 112, 137, 0.5);
    color: #fff;
  }
`;

const StyledTextarea = styled.textarea`
  background-color: rgba(255, 255, 255, 0.06);
  color: #fff;
  border: 0.5px solid rgba(168, 212, 245, 0.25);

  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(96, 165, 232, 0.6);
    color: #fff;
    box-shadow: none;
    outline: none;
  }
`;

const StyledLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(168, 212, 245, 0.7);
  margin-bottom: 0.4rem;
  display: block;
`;

const FormButtons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #1a4f8a;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 10px;
  color: #e8f2ff;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2563b0;
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  border: 0.5px solid rgba(168, 212, 245, 0.25);
  border-radius: 8px;
  font-size: 0.95rem;
  color: rgba(168, 212, 245, 0.7);
  padding: 10px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: rgba(168, 212, 245, 0.6);
    color: #fff;
  }
`;

const ErrorMsg = styled.div`
  color: #f87171;
`;

const CfTurnstile = styled.div``;

function Form({ onCloseModal }) {
  const [isLoadaing, setIsLoadding] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      cf_turnstile_token: "",
    },
  });

  // registering the virtual field
  useEffect(() => {
    register("cf_turnstile_token", { required: true });
  }, [register]);

  const onTurnstileSuccess = (token) => {
    setValue("cf_turnstile_token", token, {
      shouldValidate: true,
    });
  };

  useEffect(() => {
    if (!window.turnstile) return;

    window.turnstile.render(".cf-turnstile", {
      sitekey: "0x4AAAAAACqzGpzOkJGRhCHZ",
      callback: onTurnstileSuccess,
    });
  }, []);

  async function onSubmit(data) {
    try {
      setIsLoadding(true);
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // if there are too many requests, redirect

      if (res.status === 429) {
        sessionStorage.setItem("tooManyRequests", "true");
        navigate("/too-many-requests");
      }

      const result = await res.json();

      setIsLoadding(false);

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong");
      }
      // set a sessionStorage for having fiiled out the form
      sessionStorage.setItem("formFilledOut", "true");

      reset();
      navigate("/thank-you");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <StyledForm
      type={onCloseModal ? "modal" : "regular"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <StyledLabel>Nume</StyledLabel>
        <StyledInput
          type="text"
          name="name"
          className="form-control"
          {...register("name", { required: "Numele este obligatoriu!" })}
        />
        {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
      </div>
      <div className="mb-4">
        <StyledLabel>Număr de telefon</StyledLabel>
        <StyledInput
          type="text"
          name="phone"
          className="form-control"
          {...register("phone", {
            required: "Numarul de telefon este obligatoriu!",
          })}
        />
        {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
      </div>
      <div className="mb-4">
        <StyledLabel>Adresă de email</StyledLabel>
        <StyledInput
          type="text"
          name="email"
          className="form-control"
          {...register("email", { required: "Email-ul este obligatoriu!" })}
        />
        {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
      </div>
      <div className="mb-4">
        <StyledLabel>Mesaj (Opțional)</StyledLabel>
        <StyledTextarea
          type="text"
          rows={3}
          name="message"
          className="form-control"
          {...register("message")}
        />
      </div>
      {/* Turnstile Widget */}
      <div className="mb-2 d-flex justify-content-center">
        <CfTurnstile
          className="cf-turnstile"
          data-theme="light"
          data-size="normal"
        ></CfTurnstile>
      </div>
      <FormButtons>
        <SubmitButton type="submit">
          {isLoadaing ? (
            <>
              <LoadingSpinner /> Se trimite...
            </>
          ) : (
            "Trimite"
          )}
        </SubmitButton>
        <CancelButton onClick={() => onCloseModal?.()}>Anulează</CancelButton>
      </FormButtons>
    </StyledForm>
  );
}

export default Form;
