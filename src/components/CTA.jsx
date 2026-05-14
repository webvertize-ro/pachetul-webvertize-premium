import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import Form from "./Form";
import styled from "styled-components";

const StyledCTA = styled.div`
  position: relative;
  padding: 3.5rem;
  background-color: #456882;
  color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 1.75rem;
  }
`;

const TextContent = styled.div`
  position: relative;
  z-index: 10;
`;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const StyledP = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: #1b3c53;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 0.75rem;
  padding: 0.75rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

function CTA({
  title = "Vrei să vezi cum te pot ajuta serviciile noastre?",
  text = "Fiecare proiect este diferit. Completează câteva detalii și primești o ofertă personalizată, rapid și fără obligații.",
  textBtn = "Cere o ofertă de preț",
}) {
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
