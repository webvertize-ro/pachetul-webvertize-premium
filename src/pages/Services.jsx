import styled from "styled-components";
import Hero from "../components/Hero";
import heroBg from "../assets/images/services-hero.avif";
import ServicesDetails from "../components/ServicesDetails";
import CTA from "../components/CTA";
import { useEffect } from "react";
import { images } from "../data/gallery2";
import PhotoGallery from "../components/PhotoGallery";
import Group from "../components/Group";
import { Helmet } from "react-helmet-async";

const StyledServices = styled.div`
  /* height: 650px; */
  /* position: relative; */
`;

function Services() {
  return (
    <>
      <Helmet>
        <title>Afacere Locală | Servicii</title>
        <meta
          name="description"
          content="Explorează toate serviciile oferite de [Numele Afacerii] în [orașul tău]. Soluții complete pentru nevoile tale, livrate profesionist și la prețuri corecte."
        />
      </Helmet>
      <StyledServices>
        <Hero
          heroTitle="Servicii de încredere, aproape de tine"
          heroDesc="Punem la dispoziție o gamă variată de servicii, adaptate nevoilor tale, cu accent pe calitate, seriozitate și atenție la detalii."
          heroBg={heroBg}
        />
        <ServicesDetails />
        <PhotoGallery
          title="Serviciile noastre, în imagini"
          text="O selecție de imagini care ilustrează modul în care oferim serviciile noastre și atenția acordată fiecărui proiect."
          images={images}
        />
        <CTA
          title="Ai un proiect în minte?"
          text="Spune-ne ce îți dorești, iar noi te vom ajuta să găsești soluția potrivită pentru afacerea ta."
          bgColor="green"
        />
      </StyledServices>
    </>
  );
}

export default Services;
