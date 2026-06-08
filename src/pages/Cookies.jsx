import styled from "styled-components";
import Accordion from "../components/Accordion";
import Hero from "../components/Hero";
import cookiesImg from "../assets/images/cookies-img.avif";
import CookiesInfoSection from "../components/CookiesInfoSection";
import cookies from "../data/cookies.json";
import Group from "../components/Group";
import { Helmet } from "react-helmet-async";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledCookies = styled.div`
  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

function Cookies() {
  const { contentMap } = useContent();

  const faqs = [1, 2, 3, 4, 5].map((i) => ({
    number: c(contentMap, `cookies.accordion_item_${i}_number`),
    question: c(contentMap, `cookies.accordion_item_${i}_question`),
    answer: c(contentMap, `cookies.accordion_item_${i}_answer`),
  }));

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
          heroTitle={c(contentMap, "cookies.header_title")}
          heroDesc={c(contentMap, "cookies.header_description")}
          heroBg={c(contentMap, "cookies.header_bg_image")}
          ctaBtnText={c(contentMap, "cookies.header_button_text")}
        />
        <Accordion
          faqs={faqs}
          title={c(contentMap, "cookies.accordion_title")}
        />
        <CookiesInfoSection />
      </StyledCookies>
    </>
  );
}

export default Cookies;
