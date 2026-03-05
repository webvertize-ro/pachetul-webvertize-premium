import styled from 'styled-components';
import logoImg from '../assets/images/basic-business-logo.svg';

const StyledImg = styled.img`
  max-width: ${(props) => (props.width ? props.width : '160px')};
`;

function Logo({ width }) {
  return (
    <StyledImg
      width={width}
      src={logoImg}
      alt="Logo-ul afacerii [Nume Afacere]"
    />
  );
}

export default Logo;
