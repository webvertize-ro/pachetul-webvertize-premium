import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #234c6a;
  position: fixed;
  bottom: 1rem;
  right: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1.4rem;
  border: none;
  z-index: 98;
`;

function BackTopBtn() {
  const [showButton, setShowButton] = useState(false);

  function scrollTop() {
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    function handleScrollButton() {
      const scrollTop = window.scrollY;
      setShowButton(scrollTop > 35);
    }

    window.addEventListener("scroll", handleScrollButton);

    return () => window.removeEventListener("scroll", handleScrollButton);
  }, []);

  return (
    showButton && (
      <StyledButton onClick={() => scrollTop()}>
        <FontAwesomeIcon icon={faCircleUp} />
      </StyledButton>
    )
  );
}

export default BackTopBtn;
