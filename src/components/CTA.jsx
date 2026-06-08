import Modal from "./Modal";
import Form from "./Form";
import styled from "styled-components";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledCTA = styled.div`
  padding: 6rem 0;
  background-color: #0b2240;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
  border-bottom: 0.5px solid rgba(168, 212, 245, 0.1);
  color: #fff;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 1.75rem;
  }
`;

const TextContent = styled.div`
  position: relative;
`;

const StyledH2 = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: rgba(168, 212, 245, 0.75);
  max-width: 480px;
  margin: 0 auto 2rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  background-color: #1a4f8a;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  padding: 14px 36px;
  color: #e8f2ff;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2563b0;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

function CTA({
  title = "Vrei să vezi cum te pot ajuta serviciile noastre?",
  text = "Fiecare proiect este diferit. Completează câteva detalii și primești o ofertă personalizată, rapid și fără obligații.",
  textBtn = "Cere o ofertă de preț",
}) {
  const { contentMap } = useContent();

  return (
    <StyledCTA className="get-quote text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <TextContent>
              <StyledH2 className="lh-base">{title}</StyledH2>
              <StyledP>{text}</StyledP>
              <Modal>
                <Modal.Open opens="form-modal">
                  <StyledButton>{textBtn}</StyledButton>
                </Modal.Open>
                <Modal.Window
                  name="form-modal"
                  bgColor="rgba(59, 94, 117, 0.5)"
                >
                  <Form />
                </Modal.Window>
              </Modal>
            </TextContent>
          </div>
        </div>
      </div>
    </StyledCTA>
  );
}

export default CTA;
