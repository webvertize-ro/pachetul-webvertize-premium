import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Helmet } from "react-helmet-async";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledTooManyRequests = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  background-color: #0b2240;
  background-image: radial-gradient(
    ellipse at center,
    rgba(168, 212, 245, 0.08) 0%,
    transparent 70%
  );
  color: #fff;
`;

const StyledP = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 0;
  max-width: 600px;
  color: rgba(168, 212, 245, 0.8);

  &:first-of-type {
    font-size: 1.05rem;
    font-weight: 500;
    color: #fff;
  }
`;

const StyledButton = styled(Link)`
  text-decoration: none;
  border: none;
  padding: 12px 28px;
  background-color: #1a4f8a;
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

function TooManyRequests() {
  const [allowed, setAllowed] = useState(false);
  const navigate = useNavigate();
  const { contentMap } = useContent();

  useEffect(() => {
    const tooManyRequests = sessionStorage.getItem("tooManyRequests");
    if (!tooManyRequests) {
      navigate("/");
      return;
    }
    setAllowed(true);

    // clear sessionStorage (such that it won't load on refresh
    sessionStorage.removeItem("tooManyRequests");
  }, [navigate]);

  if (!allowed) return null;

  return (
    <>
      <Helmet>
        <title>Prea multe solicitări</title>
        <meta name="description" content="Prea multe solicitări!" />
      </Helmet>
      <StyledTooManyRequests>
        <Logo />
        <StyledP>
          {c(contentMap, "too-many-requests.too-many-requests-paragraph-1")}
        </StyledP>
        <StyledP>
          {c(contentMap, "too-many-requests.too-many-requests-paragraph-2")}
        </StyledP>

        <StyledButton
          to={c(contentMap, "too-many-requests.too-many-requests-button-route")}
        >
          {c(contentMap, "too-many-requests.too-many-requests-button-text")}
        </StyledButton>
      </StyledTooManyRequests>
    </>
  );
}

export default TooManyRequests;
