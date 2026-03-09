import styled from 'styled-components';
import SplitSection from '../components/SplitSection';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import OurPartners from '../components/OurPartners';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import Testimonials from '../components/Testimonials';
import ShortServices from '../components/ShortServices';
import { useEffect } from 'react';
import PhotoGallery from '../components/PhotoGallery';
import { images } from '../data/gallery1.js';
import SliderWrapper from '../components/ImageSlider/SliderWrapper.jsx';
import { Helmet } from 'react-helmet-async';

const StyledHome = styled.div`
  /* overflow-x: hidden; */
`;

function Home() {
  return (
    <>
      <Helmet>
        <title>Afacere Locală | Acasă</title>
        <meta
          name="description"
          content="[Numele Afacerii] – servicii profesionale de [domeniu] în [orașul tău]. Calitate garantată, experiență locală și clienți mulțumiți. Cere o ofertă gratuită azi!"
        />
      </Helmet>
      <StyledHome>
        {/* <SplitSection btn1Path="/portfolio" /> */}
        {/* Slider/Carousel */}
        <SliderWrapper />
        <Stats />
        <PhotoGallery
          title="Galerie foto din activitatea noastră"
          text="Descoperă câteva imagini care surprind modul în care lucrăm, proiectele realizate și atenția pe care o acordăm fiecărui detaliu."
          images={images}
        />
        <ShortServices />
        <OurPartners />
        <WhyWorkWithUs />
        <Testimonials />
        <CTA />
      </StyledHome>
    </>
  );
}

export default Home;
