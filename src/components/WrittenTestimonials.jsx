import styled from "styled-components";
import testimonials from "../data/testimonials.json";
import Avatar from "./Avatar";
import RatingStars from "./RatingStars";
import TestimonialContent from "./TestimonialContent";
import ReviewGoogleButton from "./ReviewGoogleButton";
import TestimonialWrittenCard from "./TestimonialWrittenCard";
import GoogleReviewsBanner from "./GoogleReviewsBanner";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledWrittenTestimonials = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: #0f2f5a;

  @media (max-width: 576px) {
    padding: 2.5rem 1.5rem;
  }
`;

const WrittenTestimonialsTitle = styled.h2`
  margin-bottom: 1rem;
`;

const TestimonialsHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const TestimonialsSubtitle = styled.p`
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 300;
  max-width: 600px;
  margin-bottom: 3rem;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const StyledTestimonialsContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1.25rem;
`;

const StyledRow = styled.div`
  /* gap: 1.5rem; */
`;

function WrittenTestimonials() {
  const { contentMap } = useContent();
  const testimonials = [1, 2, 3, 4, 5, 6].map((i) => ({
    image: c(contentMap, `testimonials.review_${i}_image`),
    stars: c(contentMap, `testimonials.review_${i}_stars`),
    quote: c(contentMap, `testimonials.review_${i}_quote`),
    name: c(contentMap, `testimonials.review_${i}_name`),
    function: c(contentMap, `testimonials.review_${i}_function`),
  }));

  return (
    <StyledWrittenTestimonials>
      <WrittenTestimonialsTitle className="d-flex flex-column align-items-center">
        <TestimonialsHeading>
          {c(contentMap, "testimonials.reviews_title")}
        </TestimonialsHeading>
        <TestimonialsSubtitle>
          {c(contentMap, "testimonials.reviews_description")}
        </TestimonialsSubtitle>
        <GoogleReviewsBanner />
      </WrittenTestimonialsTitle>

      <StyledTestimonialsContainer className="container">
        <StyledRow className="row">
          {testimonials.map((t, index) => (
            <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
              <TestimonialWrittenCard
                key={index}
                img={t.image}
                stars={t.stars}
                content={t.quote}
                name={t.name}
                profession={t.function}
              />
            </div>
          ))}
        </StyledRow>
      </StyledTestimonialsContainer>
      <ReviewGoogleButton />
    </StyledWrittenTestimonials>
  );
}

export default WrittenTestimonials;
