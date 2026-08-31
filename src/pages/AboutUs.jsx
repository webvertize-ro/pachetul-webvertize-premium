import Hero from "../components/Hero";
import OurTeam from "../components/OurTeam";
import OurMission from "../components/OurMission";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

function AboutUs() {
  const { contentMap } = useContent();

  return (
    <div>
      <Helmet>
        <title>Afacere Locală | Despre Noi</title>
        <meta
          name="description"
          content="Află povestea echipei [Numele Afacerii]. Cine suntem, ce ne motivează și de ce sute de clienți din [orașul tău] ne-au ales. Oameni serioși, rezultate reale."
        />
      </Helmet>
      <Hero
        heroBg={c(contentMap, "about.header_bg_image")}
        heroTitle={c(contentMap, "about.header_title")}
        heroDesc={c(contentMap, "about.header_description")}
        ctaBtnText={c(contentMap, "about.header_button_text")}
      />
      <OurMission />
      <OurTeam />
      <CTA
        title={c(contentMap, "about.cta_title")}
        text={c(contentMap, "about.cta_description")}
        ctaBtnText={c(contentMap, "about.cta_button_text")}
      />
    </div>
  );
}

export default AboutUs;
