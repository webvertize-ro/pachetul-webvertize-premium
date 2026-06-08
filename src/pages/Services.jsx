import styled from "styled-components";
import Hero from "../components/Hero";
import heroBg from "../assets/images/services-hero.avif";
import ServicesDetails from "../components/ServicesDetails";
import CTA from "../components/CTA";
import { images } from "../data/gallery2";
import PhotoGallery from "../components/PhotoGallery";
import Group from "../components/Group";
import { Helmet } from "react-helmet-async";
import TimelineHowWeWork from "../components/TimelineHowWeWork";
import CertificationsList from "../components/CertificationsList";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledServices = styled.div`
  /* height: 650px; */
  /* position: relative; */
`;

function Services() {
  const { contentMap } = useContent();
  const images = [1, 2, 3, 4, 5, 6].map((i) => ({
    image: c(contentMap, `services.gallery_image_${i}`),
    description: c(contentMap, `services.gallery_image_${i}_alt`),
  }));

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
          heroTitle={c(contentMap, "services.header_title")}
          heroDesc={c(contentMap, "services.header_description")}
          heroBg={c(contentMap, "services.header_bg_image")}
          ctaBtnText={c(contentMap, "services.header_button_text")}
        />
        <ServicesDetails />
        <TimelineHowWeWork />
        <PhotoGallery
          title={c(contentMap, "services.gallery_title")}
          text={c(contentMap, "services.gallery_description")}
          images={images}
        />
        <CertificationsList />
        <CTA
          title={c(contentMap, "services.cta_title")}
          text={c(contentMap, "services.cta_description")}
          textBtn={c(contentMap, "services.cta_button_text")}
          bgColor="green"
        />
      </StyledServices>
    </>
  );
}

export default Services;
