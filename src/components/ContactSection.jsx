import styled from "styled-components";
import CustomizableItem from "./CustomizableItem";
import { contact } from "../data/contactInfo";
import ContactDataItem from "./ContactDataItem";
import Modal from "./Modal";
import Form from "./Form";

const StyledContactSection = styled.div`
  padding: 5rem 0;
  color: #fff;
  background-color: #0b2240;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);

  @media (max-width: 576px) {
    padding: 3rem 0;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div``;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  color: rgba(168, 212, 245, 0.75);
  font-size: 1rem;
  font-weight: 300;
  max-width: 560px;
  margin-bottom: 2.5rem;

  @media (max-width: 576px) {
    font-size: 1rem;
    text-align: center;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const Row = styled.div`
  @media (max-width: 992px) {
    gap: 1.5rem;
  }
`;

const LeftSide = styled.div`
  @media (max-width: 576px) {
    gap: 0.75rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    gap: 0.75rem;
  }
`;

const RightSide = styled.div``;

const MapWrapper = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  border: 0.5px solid rgba(168, 212, 245, 0.15);
  width: 100%;
  aspect-ratio: 1 / 1;

  @media (max-width: 576px) {
    aspect-ratio: 4 / 3;
  }
`;

const StyledIFrame = styled.iframe`
  width: 100%;
  height: 100%;
  display: block;
  border: none;

  @media (max-width: 576px) {
    width: 300px;
  }
`;

const Item = styled.div`
  background-color: rgba(59, 130, 212, 0.12);
  border: 0.5px solid rgba(96, 165, 232, 0.2);
  color: #fff;
  border-radius: 0.75rem;
  padding: 0.75rem;
`;

const StyledButton = styled.button`
  background: #1a4f8a;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 28px;
  color: #e8f2ff;
  cursor: pointer;
  width: auto;
  margin: 0;
  transition: background 0.2s ease;

  &:hover {
    background: #2563b0;
  }

  @media (min-width: 992px) {
    &:hover {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 2px solid rgba(54, 85, 104, 0.5);
    }
  }

  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 0.75rem;
  padding: 1rem;

  width: 50%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

function ContactSection() {
  return (
    <StyledContactSection>
      <Container className="container">
        <StyledH2>Datele noastre de contact</StyledH2>
        <StyledP>
          Alege metoda de contact care ți se potrivește și spune-ne ce ai în
          minte.
        </StyledP>
        <Row className="row d-flex">
          <LeftSide className="col-lg-6 d-flex flex-column gap-3">
            {contact.map((c) => (
              <ContactDataItem
                link={c.link}
                title={c.name}
                description={c.content}
                icon={c.icon}
              />
            ))}
            <Modal>
              <Modal.Open opens="form-modal">
                <StyledButton>Cere o ofertă de preț</StyledButton>
              </Modal.Open>
              <Modal.Window name="form-modal">
                <Form />
              </Modal.Window>
            </Modal>
          </LeftSide>
          <RightSide className="col-lg-6 d-flex justify-content-center">
            <MapWrapper>
              <StyledIFrame
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.57954789398!2d26.012237353149644!3d44.43791870157616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1769760750337!5m2!1sen!2sro"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></StyledIFrame>
            </MapWrapper>
          </RightSide>
        </Row>
      </Container>
    </StyledContactSection>
  );
}

export default ContactSection;
