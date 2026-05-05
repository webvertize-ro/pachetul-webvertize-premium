import styled from "styled-components";
import logoImg from "../assets/images/basic-business-logo.svg";
import logoImgDark from "../assets/images/basic-business-logo-dark.svg";

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  max-width: ${(props) => (props.width ? props.width : "160px")};
  max-height: ${(props) => (props.width ? props.width : "60px")};
`;

function Logo({ width, dark }) {
  return (
    <ImgContainer>
      <StyledImg
        width={width}
        src={dark ? logoImgDark : logoImg}
        alt="Logo-ul afacerii [Nume Afacere]"
      />
    </ImgContainer>
  );
}

export default Logo;
