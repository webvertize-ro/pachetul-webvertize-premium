import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { LoadingIcon } from 'yet-another-react-lightbox';
import LoadingSpinner from '../LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const StyledFormLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 12;
  height: 100%;
`;

const StyledH4 = styled.h4`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  color: #fff;
  font-weight: 600;
`;

const StyledP = styled.p`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
`;

const StyledForm = styled.form`
  /* Glassmorphism effect */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2rem;
  color: #fff;
  text-align: left;

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const StyledLabel = styled.label`
  font-weight: 600;
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.65);
  border-radius: 0.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #000;
  font-weight: 500;

  &:focus {
    background: rgba(255, 255, 255, 0.75);
    border-radius: 0.5rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const StyledTextarea = styled.textarea`
  background: rgba(255, 255, 255, 0.65);
  border-radius: 0.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #000;
  font-weight: 500;

  &:focus {
    background: rgba(255, 255, 255, 0.75);
    border-radius: 0.5rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const ErrorMsg = styled.div`
  color: #f16a6a;
  font-weight: 500;
`;

const StyledButton = styled.button`
  border: none;
  background-color: rgba(3, 52, 110, 0.75);
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
`;

function FormLandingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const turnstileRef = useRef(null);
  const renderedRef = useRef(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cf_turnstile_token: '',
    },
  });

  // register the virtual field
  useEffect(() => {
    register('cf_turnstile_token', { required: true });
  }, [register]);

  const onTurnstileSuccess = (token) => {
    setValue('cf_turnstile_token', token, {
      shouldValidate: true,
    });
  };

  // render the turnstile
  useEffect(() => {
    if (renderedRef.current) return;

    const interval = setInterval(() => {
      if (!window.turnstile || !turnstileRef.current) return;

      window.turnstile.render(turnstileRef.current, {
        sitekey: '0x4AAAAAACqzGpzOkJGRhCHZ',
        callback: onTurnstileSuccess,
      });

      renderedRef.current = true;
      clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  async function onSubmit(data) {
    try {
      setLoading(true);
      const res = await fetch('/api/sendEmailLandingPage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // if there are too many requests, redirect
      if (res.status === 429) {
        sessionStorage.setItem('tooManyRequests', 'true');
        navigate('/too-many-requests');
      }

      const result = await res.json();
      setLoading(false);

      if (!res.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      // mark the form as filled in the sessionStorage
      sessionStorage.setItem('formFilledOut', 'true');

      reset();
      navigate('/thank-you');
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  return (
    <StyledFormLandingPage>
      <StyledH4>Fă primul pas pentru rezolvarea problemei!</StyledH4>
      <StyledP>Lasă-ne câteva detalii și te sunăm noi.</StyledP>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <StyledLabel htmlFor="name" className="form-label">
            Nume
          </StyledLabel>
          <StyledInput
            type="text"
            name="name"
            className="form-control"
            placeholder="Ion Popescu"
            {...register('name', { required: 'Numele este obligatoriu!' })}
          />
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
        </div>
        <div className="mb-3">
          <StyledLabel htmlFor="phone" className="form-label">
            Număr de telefon
          </StyledLabel>
          <StyledInput
            type="text"
            name="phone"
            className="form-control"
            placeholder="0712345678"
            {...register('phone', {
              required: 'Numărul de telefon este obligatoriu!',
            })}
          />
          {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
        </div>
        <div className="mb-3">
          <StyledLabel htmlFor="message" className="form-label">
            Mesaj (opțional)
          </StyledLabel>
          <StyledTextarea
            name="message"
            id="message"
            className="form-control"
            placeholder="Vreu servicul/produsul X"
            {...register('message')}
          ></StyledTextarea>
        </div>
        <div className="mb-2">
          <div
            ref={turnstileRef}
            className="cf-turnstile"
            data-theme="light"
            data-size="normal"
          ></div>
        </div>
        <StyledButton type="submit">
          <div>{loading ? <LoadingSpinner /> : ''}</div>
          <div>{loading ? 'Se trimite...' : 'Trimite'}</div>
        </StyledButton>
      </StyledForm>
    </StyledFormLandingPage>
  );
}

export default FormLandingPage;
