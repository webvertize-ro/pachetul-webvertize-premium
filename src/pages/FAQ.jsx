import Accordion from "../components/Accordion";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import { faqData } from "../data/faq";
import { Helmet } from "react-helmet-async";
import faqImage from "../assets/images/faq_image.avif";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

function FAQ() {
  const { contentMap } = useContent();

  const faqs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
    number: c(contentMap, `faq.faq_${i}_number`),
    question: c(contentMap, `faq.faq_${i}_question`),
    answer: c(contentMap, `faq.faq_${i}_answer`),
  }));

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
        heroTitle={c(contentMap, "faq.header_title")}
        heroDesc={c(contentMap, "faq.header_description")}
        heroBg={c(contentMap, "faq.header_bg_image")}
        ctaBtnText={c(contentMap, "faq.header_button_text")}
      />
      <Accordion
        faqs={faqs}
        title={c(contentMap, "faq.faq_title")}
        subtitle={c(contentMap, "faq.faq_description")}
      />
      <CTA
        title={c(contentMap, "faq.cta_title")}
        text={c(contentMap, "faq.cta_description")}
        textBtn={c(contentMap, "faq.cta_button_text")}
      />
    </div>
  );
}

export default FAQ;
