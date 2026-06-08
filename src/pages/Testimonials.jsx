import VideoTestimonials from "../components/VideoTestimonials";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import WrittenTestimonials from "../components/WrittenTestimonials";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

function Testimonials() {
  const { contentMap } = useContent();

  return (
    <div>
      <Hero
        heroBg="https://placehold.co/1920x400"
        heroTitle={c(contentMap, "testimonials.header_title")}
        heroDesc={c(contentMap, "testimonials.header_description")}
        ctaBtnText={c(contentMap, "testimonials.header_button_text")}
      />
      {/* Video Testimonials Section */}
      <VideoTestimonials />
      {/* CTA */}
      <CTA
        title={c(contentMap, "testimonials.cta_title")}
        text={c(contentMap, "testimonials.cta_description")}
        textBtn={c(contentMap, "testimonials.cta_button_text")}
      />
      {/* Written Testimonials Section (Google Reviews) */}
      <WrittenTestimonials />
    </div>
  );
}

export default Testimonials;
