import styled from 'styled-components';
import SplitSection from '../components/SplitSection';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import OurPartners from '../components/OurPartners';
import splitSectionPic2 from '../assets/images/split_section_pic2.jpg';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import Testimonials from '../components/Testimonials';
import ShortServices from '../components/ShortServices';
import { useEffect } from 'react';
import PhotoGallery from '../components/PhotoGallery';
import { images } from '../data/gallery1.js';
import SliderWrapper from '../components/ImageSlider/SliderWrapper.jsx';

const StyledHome = styled.div`
  /* overflow-x: hidden; */
`;

function Home() {
  useEffect(() => {
    document.title = 'Afacere Locală | Acasă';
  }, []);

  return (
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
  );
}

export default Home;
