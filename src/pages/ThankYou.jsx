import styled from "styled-components";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const StyledThankYou = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
  background-color: #0b2240;
  background-image: radial-gradient(
    ellipse at center,
    rgba(59, 130, 212, 0.15) 0%,
    transparent 70%
  );
`;

const StyledP = styled.p`
  font-family: "Montserrat";
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
  color: rgba(168, 212, 245, 0.85);

  &:first-of-type {
    font-size: 1.15rem;
    font-weight: 500;
    color: #fff;
  }
`;

const StyledButton = styled(Link)`
  text-decoration: none;
  border: none;
  padding: 0.75rem;
  background-color: #7fa5b8;
  color: #e8f2ff;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2563b0;
  }
`;

function ThankYou() {
  const navigate = useNavigate();

  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    // check sessionStorage
    const formFilledOut = sessionStorage.getItem("formFilledOut");
    if (!formFilledOut) {
      navigate("/");
      return;
    }
    setAllowed(true);

    // clear sessionStorage (such that it won't load on refresh)
    sessionStorage.removeItem("formFilledOut");
  }, [navigate]);

  if (!allowed) return null;

  return (
    <>
      <Helmet>
        <title>Formular trimis | Mulțumim!</title>
        <meta
          name="description"
          content="Mulțumim pentru completarea formularului!"
        />
      </Helmet>
      <StyledThankYou>
        <Logo />
        <StyledP>Vă mulțumim pentru completarea formularului!</StyledP>
        <StyledP>
          Urmează să vă contactăm în cel mai scurt timp în legătură cu
          solicitarea dumneavoastră!
        </StyledP>
        <StyledButton to="/">Înapoi pe pagina principală</StyledButton>
      </StyledThankYou>
    </>
  );
}

export default ThankYou;
