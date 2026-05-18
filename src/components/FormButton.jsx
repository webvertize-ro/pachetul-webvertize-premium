import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Form from "./Form";
import Modal from "./Modal";

const StyledFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid rgba(168, 212, 245, 0.2);
  color: #a8d4f5;
  font-size: 1.4rem;
  border-radius: 50%;
  background-color: rgba(15, 47, 90, 0.85);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0.75rem;
  position: relative;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;
  &:hover {
    background-color: rgba(26, 79, 138, 0.95);
    border-color: rgba(168, 212, 245, 0.4);
  }
`;

function FormButton() {
  return (
    <>
      <Modal>
        <Modal.Open opens="form-modal">
          <StyledFormButton aria-label="Deschide modalul cu formularul de contact">
            <FontAwesomeIcon icon={faMessage} />
          </StyledFormButton>
        </Modal.Open>
        <Modal.Window name="form-modal" bgColor="rgba(59, 94, 117, 0.3)">
          <Form />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default FormButton;
