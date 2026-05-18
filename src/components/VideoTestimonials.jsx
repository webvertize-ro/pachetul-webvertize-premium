import styled from "styled-components";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpg";
import TestimonialCard from "./TestimonialCard";

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
  const testimonials = [
    {
      name: "Ion Ionescu",
      function: "Manager General",
      user_image: user1,
      testimonial_video:
        "https://ebsaptaehndiwvjdbqnm.supabase.co/storage/v1/object/public/website-assets/49e00d1c-b989-41c3-a898-62c9500fcb64/testimonial_video_1.mp4",
    },
    {
      name: "Paul Terescenco",
      function: "Agent de vanzari",
      user_image: user2,
      testimonial_video:
        "https://ebsaptaehndiwvjdbqnm.supabase.co/storage/v1/object/public/website-assets/49e00d1c-b989-41c3-a898-62c9500fcb64/testimonial_video_2.mp4",
    },
    {
      name: "Ionut Camburescu",
      function: "Manager de vanzari",
      user_image: user3,
      testimonial_video:
        "https://ebsaptaehndiwvjdbqnm.supabase.co/storage/v1/object/public/website-assets/49e00d1c-b989-41c3-a898-62c9500fcb64/testimonial_video_3.mp4",
    },
    {
      name: "Cosmin Papucaru",
      function: "Manager de marketing",
      user_image: user4,
      testimonial_video:
        "https://ebsaptaehndiwvjdbqnm.supabase.co/storage/v1/object/public/website-assets/49e00d1c-b989-41c3-a898-62c9500fcb64/testimonial_video_4.mp4",
    },
  ];

  return (
    <Section>
      <StyledVideoTestimonials className="container">
        <VideoTestimonialsTitle>Testimoniale Video</VideoTestimonialsTitle>
        <VideoTestimonialsDescription>
          <p>
            Vizualizează videoclipurile de mai jos și află care este opinia
            oamenilor despre noi.
          </p>
        </VideoTestimonialsDescription>
        <VideoTestimonialsInner className="row g-4">
          {testimonials.map((t, index) => (
            <TestimonialCard
              img={t.user_image}
              name={t.name}
              functionUser={t.function}
              video={t.testimonial_video}
              key={index}
            />
          ))}
        </VideoTestimonialsInner>
      </StyledVideoTestimonials>
    </Section>
  );
}

export default VideoTestimonials;
