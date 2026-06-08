import styled from "styled-components";
import Hero from "../components/Hero";
import portfolioBackground from "../assets/images/portfolio_background.avif";
import Projects from "../components/Projects";
import ReasonsToChooseUs from "../components/ReasonsToChooseUs";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledPortfolio = styled.div``;

function Portfolio() {
  const { contentMap } = useContent();

  return (
    <>
      <Helmet>
        <title>Afacere Locală | Portofoliu</title>
        <meta
          name="description"
          content="Vezi proiectele realizate de [Numele Afacerii]. Lucrări concrete, clienți reali, rezultate vizibile. Lasă munca noastră să vorbească în locul nostru."
        />
      </Helmet>

      <StyledPortfolio>
        <Hero
          heroTitle={c(contentMap, "portfolio.header_title")}
          heroDesc={c(contentMap, "portfolio.header_description")}
          heroBg={c(contentMap, "portfolio.header_bg_image")}
          ctaBtnText={c(contentMap, "portfolio.header_button_text")}
        />
        <Projects />
        <ReasonsToChooseUs />
        <CTA
          title={c(contentMap, "portfolio.cta_title")}
          text={c(contentMap, "portfolio.cta_description")}
          textBtn={c(contentMap, "portfolio.cta_button_text")}
        />
      </StyledPortfolio>
    </>
  );
}

export default Portfolio;
