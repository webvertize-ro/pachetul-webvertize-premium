import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const Section = styled.section`
  background-color: #2c5d93;
  padding: 5rem 0;

  @media (max-width: 576px) {
    padding: 3rem 0;
  }
`;

const StyledVideoTestimonials = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const VideoTestimonialsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
`;

const VideoTestimonialsDescription = styled.div``;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(168, 212, 245, 0.75);
  max-width: 520px;
  line-height: 1.65;
  margin-bottom: 3rem;
`;

const VideoTestimonialsInner = styled.div`
  display: flex;
`;

function VideoTestimonials() {
  const { contentMap } = useContent();

  const testimonials = [1, 2, 3, 4].map((i) => ({
    image: c(contentMap, `testimonials.video_testimonial_${i}_image`),
    name: c(contentMap, `testimonials.video_testimonial_${i}_name`),
    function: c(contentMap, `testimonials.video_testimonial_${i}_function`),
    video_url: c(contentMap, `testimonials.video_testimonial_${i}_video_url`),
  }));

  return (
    <Section>
      <StyledVideoTestimonials className="container">
        <VideoTestimonialsTitle>
          {c(contentMap, "testimonials.video_testimonials_title")}
        </VideoTestimonialsTitle>
        <VideoTestimonialsDescription>
          <p>{c(contentMap, "testimonials.video_testimonials_description")}</p>
        </VideoTestimonialsDescription>
        <VideoTestimonialsInner className="row g-4">
          {testimonials.map((t, index) => (
            <TestimonialCard
              img={t.image}
              name={t.name}
              functionUser={t.function}
              video={t.video_url}
              key={index}
            />
          ))}
        </VideoTestimonialsInner>
      </StyledVideoTestimonials>
    </Section>
  );
}

export default VideoTestimonials;
