import styled from "styled-components";
import FormButton from "./FormButton";
import WhatsAppButton from "./WhatsAppButton";
import FacebookButton from "./FacebookButton";

const StyledSideButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: fixed;
  right: 1.5rem;
  bottom: 35%;
  z-index: 99;
`;

function SideButtons() {
  // const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <StyledSideButtons>
      {/* Form Button */}
      <FormButton />
      {/* Facebook Button */}
      <FacebookButton />
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </StyledSideButtons>
  );
}

export default SideButtons;
