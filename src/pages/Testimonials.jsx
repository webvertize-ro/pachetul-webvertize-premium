import VideoTestimonials from "../components/VideoTestimonials";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import WrittenTestimonials from "../components/WrittenTestimonials";

function Testimonials() {
  return (
    <div>
      <Hero
        heroBg="https://placehold.co/1920x400"
        heroTitle="Testimoniale"
        heroDesc="Experiențe reale de la cei care ne cunosc."
      />
      {/* Video Testimonials Section */}
      <VideoTestimonials />
      {/* CTA */}
      <CTA
        title="Te-au convins testimonialele clienților noștri?"
        text="Hai să dicutăm despre proiectul tău. Cere acum o ofertă de preț și revenim cu o ofertă personalizată pentru tine."
      />
      {/* Written Testimonials Section (Google Reviews) */}
      <WrittenTestimonials />
    </div>
  );
}

export default Testimonials;
