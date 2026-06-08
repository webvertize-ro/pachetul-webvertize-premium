import styled from "styled-components";
import Hero from "../components/Hero";
import contactImg from "../assets/images/contact-img.avif";
import ContactSection from "../components/ContactSection";
import CTA from "../components/CTA";
import Group from "../components/Group";
import StreetView from "../components/StreetView";
import { Helmet } from "react-helmet-async";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledContact = styled.div`
  /* height: 650px; */
`;
/**
 * Structura paginii:
 * 1. Hero
 * 2. ContactSection: date de contact + Google Maps
 * 3. CTA
 */

function Contact() {
  const { contentMap } = useContent();

  return (
    <>
      <Helmet>
        <title>Afacere Locală | Contact</title>
        <meta
          name="description"
          content="Contactează echipa [Numele Afacerii] din [orașul tău]. Suntem disponibili pentru întrebări, programări sau oferte personalizate. Răspundem rapid!"
        />
      </Helmet>
      <StyledContact>
        <Hero
          heroTitle={c(contentMap, "contact.header_title")}
          heroDesc={c(contentMap, "contact.header_description")}
          heroBg={c(contentMap, "contact.header_bg_image")}
          ctaBtnText={c(contentMap, "contact.header_button_text")}
        />
        <ContactSection />
        <StreetView />
        <CTA
          title={c(contentMap, "contact.cta_title")}
          text={c(contentMap, "contact.cta_description")}
          textBtn={c(contentMap, "contact.cta_button_text")}
        />
      </StyledContact>
    </>
  );
}

export default Contact;
