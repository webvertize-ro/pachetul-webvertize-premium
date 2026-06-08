import styled from "styled-components";
import Error from "./Error";

const StyledFormRow = styled.div`
  margin-bottom: 0.5rem;

  @media (max-width: 576px) {
    margin-bottom: 0.35;
  }
`;

const StyledLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: rgba(168, 212, 245, 0.7);
  margin-bottom: 0.3rem;
  display: block;

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && (
        <StyledLabel htmlFor={children.props.id} className="form-label">
          {label}
        </StyledLabel>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
