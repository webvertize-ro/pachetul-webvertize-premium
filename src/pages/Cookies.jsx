import styled from "styled-components";
import Accordion from "../components/Accordion";
import Hero from "../components/Hero";
import cookiesImg from "../assets/images/cookies-img.avif";
import CookiesInfoSection from "../components/CookiesInfoSection";
import cookies from "../data/cookies.json";
import Group from "../components/Group";
import { Helmet } from "react-helmet-async";

const StyledCookies = styled.div`
  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

function Cookies() {
  return (
    <>
      <Helmet>
        <title>Afacere Locală | Pagina de Cookies</title>
        <meta
          name="description"
          content="Află cum folosește [Numele Afacerii] cookie-urile pentru a-ți îmbunătăți experiența pe site. Transparență totală privind datele tale. Confidențialitatea ta contează."
        />
      </Helmet>
      <StyledCookies>
        <Hero
          heroTitle="Politica noastră privind cookie-urile"
          heroDesc="Cookie-urile sunt fișiere mici stocate pe dispozitivul tău atunci când vizitezi un site web. Ele ajută site-ul să funcționeze corect, să îți ofere o experiență personalizată și să colecteze informații statistice despre modul în care este folosit. Folosind site-ul nostru, accepți utilizarea cookie-urilor conform acestei politici."
          heroBg={cookiesImg}
        />
        <Accordion data={cookies} title="Informații generale despre cookies" />
        <CookiesInfoSection />
      </StyledCookies>
    </>
  );
}

export default Cookies;
