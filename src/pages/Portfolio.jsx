import styled from "styled-components";
import Hero from "../components/Hero";
import portfolioBackground from "../assets/images/portfolio_background.avif";
import Projects from "../components/Projects";
import ReasonsToChooseUs from "../components/ReasonsToChooseUs";
import CTA from "../components/CTA";

import { Helmet } from "react-helmet-async";

const StyledPortfolio = styled.div``;

function Portfolio() {
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
          heroTitle="Proiectele noastre"
          heroDesc="O selecție de lucrări care reflectă experiența, calitatea și modul nostru de lucru."
          heroBg={portfolioBackground}
        />
        <Projects />
        <ReasonsToChooseUs />

        <CTA
          title="Ai un proiect în plan?"
          text="Suntem gata să transformăm ideile tale în rezultate reale. Contactează-ne pentru o ofertă personalizată."
        />
      </StyledPortfolio>
    </>
  );
}

export default Portfolio;
