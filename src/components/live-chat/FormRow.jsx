import styled from "styled-components";
import Error from "./Error";

const StyledFormRow = styled.div`
  margin-bottom: 0.5rem;

  @media (max-width: 576px) {
    margin-bottom: 0;
  }
`;

const StyledLabel = styled.label`
  @media (max-width: 576px) {
    font-size: 0.9rem;
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
