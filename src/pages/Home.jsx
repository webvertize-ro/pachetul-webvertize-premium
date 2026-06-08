import styled from "styled-components";
import SplitSection from "../components/SplitSection";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import OurPartners from "../components/OurPartners";
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import ShortServices from "../components/ShortServices";
import PhotoGallery from "../components/PhotoGallery";

import { Helmet } from "react-helmet-async";
import HeroVideo from "../components/HeroVideo.jsx";
import { useContent } from "../hooks/useContent.js";
import { c } from "../utils/content.js";

const StyledHome = styled.div``;

function Home() {
  const { contentMap } = useContent();
  const images = [1, 2, 3, 4, 5, 6].map((n) => ({
    image: c(contentMap, `home.gallery_image_${n}`),
    description: c(contentMap, `home.gallery_image_${n}_alt`),
  }));

  return (
    <>
      <Helmet>
        <title>Afacere Locală | Acasă</title>
        <meta
          name="description"
          content="[Numele Afacerii] – servicii profesionale de [domeniu] în [orașul tău]. Calitate garantată, experiență locală și clienți mulțumiți. Cere o ofertă gratuită azi!"
        />
      </Helmet>
      <HeroVideo />
      <StyledHome>
        <Stats />
        <PhotoGallery
          title={c(contentMap, `home.gallery_title`)}
          text={c(contentMap, `home.gallery_description`)}
          images={images}
        />
        <ShortServices />
        <OurPartners />
        <WhyWorkWithUs />
        <CTA />
      </StyledHome>
    </>
  );
}

export default Home;
