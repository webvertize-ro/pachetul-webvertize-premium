import Hero from "../components/Hero";
import aboutUsImage from "../assets/images/about_us_image.avif";
import OurTeam from "../components/OurTeam";
import OurMission from "../components/OurMission";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";

function AboutUs() {
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
        heroBg={aboutUsImage}
        heroTitle={"Cine suntem"}
        heroDesc={
          "Povestea și valorile care ne definesc activitatea și modul în care lucrăm pentru clienții noștri"
        }
      />
      <OurMission />
      <OurTeam />
      <CTA
        title="Hai să discutăm despre proiectul tău"
        text="Contactează-ne pentru a afla cum putem contribui la dezvoltarea și succesul afacerii tale."
      />
    </div>
  );
}

export default AboutUs;
