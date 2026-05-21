import styled from "styled-components";
import Hero from "../components/Hero";
import contactImg from "../assets/images/contact-img.avif";
import ContactSection from "../components/ContactSection";
import CTA from "../components/CTA";
import { useEffect } from "react";
import Group from "../components/Group";
import StreetView from "../components/StreetView";
import { Helmet } from "react-helmet-async";

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
          heroTitle="Hai să discutăm despre proiectul tău"
          heroDesc="Ne face plăcere să răspundem la întrebările tale și să găsim soluții adaptate nevoilor afacerii tale. Completează formularul sau folosește datele de contact de mai jos."
          heroBg={contactImg}
        />
        <ContactSection />
        <StreetView />
        <CTA
          title="Vrei să lucrăm împreună?"
          text="Completează formularul sau contactează-ne direct și hai să discutăm cum putem să-ți transformăm ideile în proiecte concrete."
        />
      </StyledContact>
    </>
  );
}

export default Contact;
