import Accordion from "../components/Accordion";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import { faqData } from "../data/faq";
import { Helmet } from "react-helmet-async";
import faqImage from "../assets/images/faq_image.avif";

function FAQ() {
  return (
    <div>
      <Helmet>
        <title>Afacere Locală | Întrebări Frecvente</title>
        <meta
          name="description"
          content="Ai întrebări despre serviciile sau produsele [Numele Afacerii]? Găsești aici răspunsuri clare la cele mai comune nelămuriri. Transparent, simplu, la obiect."
        />
      </Helmet>
      {/* The items in the Group share the same background image */}
      <Hero
        heroTitle={"Întrebări Frecvente"}
        heroDesc="Răspunsuri rapide la cele mai comune întrebări despre produsele și serviciile noastre"
        heroBg={faqImage}
      />
      <Accordion
        data={faqData}
        title="Întrebări Frecvente"
        subtitle="Răspunsuri la cele mai comune întrebări. Dacă nu găsești răspunsul
            căutat, te rugăm să ne contactezi."
      />
      <CTA
        title="Ai nevoie de mai multe informații?"
        text="Contactează-ne și echipa noastră îți va oferi toate detaliile de care ai nevoie pentru produse, servicii sau colaborare."
        textBtn="Trimite o întrebare"
      />
    </div>
  );
}

export default FAQ;
