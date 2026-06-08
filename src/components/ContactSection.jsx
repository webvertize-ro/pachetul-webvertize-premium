import styled from "styled-components";
import CustomizableItem from "./CustomizableItem";
import { contact } from "../data/contactInfo";
import ContactDataItem from "./ContactDataItem";
import Modal from "./Modal";
import Form from "./Form";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
      background-color: #2563b0;
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
  const { contentMap } = useContent();
  const contactItems = [1, 2, 3].map((i) => ({
    icon: c(contentMap, `contact.contact_item_${i}_icon`),
    title: c(contentMap, `contact.contact_item_${i}_title`),
    value: c(contentMap, `contact.contact_item_${i}_value`),
    link: c(contentMap, `contact.contact_item_${i}_link`),
  }));

  const iconMap = {
    "fa-solid fa-location-dot": faLocationDot,
    "fa-solid fa-phone": faPhone,
    "fa-solid fa-envelope": faEnvelope,
  };

  return (
    <StyledContactSection>
      <Container className="container">
        <StyledH2>{c(contentMap, "contact.contact_title")}</StyledH2>
        <StyledP>{c(contentMap, "contact.contact_description")}</StyledP>
        <Row className="row d-flex">
          <LeftSide className="col-lg-6 d-flex flex-column gap-3">
            {contactItems.map((c) => (
              <ContactDataItem
                link={c.link}
                title={c.title}
                description={c.value}
                icon={iconMap[c.icon]}
              />
            ))}
            <Modal>
              <Modal.Open opens="form-modal">
                <StyledButton>
                  {c(contentMap, "contact.contact_button_text")}
                </StyledButton>
              </Modal.Open>
              <Modal.Window name="form-modal">
                <Form />
              </Modal.Window>
            </Modal>
          </LeftSide>
          <RightSide className="col-lg-6 d-flex justify-content-center">
            <MapWrapper>
              <StyledIFrame
                src={c(contentMap, "contact.contact_maps_url")}
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
