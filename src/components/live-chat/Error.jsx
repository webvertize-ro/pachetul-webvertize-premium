import styled from 'styled-components';

const StyledError = styled.div`
  color: rgb(191, 9, 47);
`;

function Error({ children }) {
  return <StyledError>{children}</StyledError>;
}

export default Error;
