import styled from "styled-components";
import testimonials from "../data/testimonials.json";
import Avatar from "./Avatar";
import RatingStars from "./RatingStars";
import TestimonialContent from "./TestimonialContent";
import ReviewGoogleButton from "./ReviewGoogleButton";
import TestimonialWrittenCard from "./TestimonialWrittenCard";
import GoogleReviewsBanner from "./GoogleReviewsBanner";

const StyledWrittenTestimonials = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: rgb(32, 32, 32);

  @media (max-width: 576px) {
    padding: 2.5rem 1.5rem;
  }
`;

const WrittenTestimonialsTitle = styled.h2`
  margin-bottom: 1rem;
`;

const TestimonialsHeading = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 0;
  font-weight: 600;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const TestimonialsSubtitle = styled.p`
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: 500;
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
  return (
    <StyledWrittenTestimonials>
      <WrittenTestimonialsTitle className="d-flex flex-column align-items-center">
        <TestimonialsHeading>Testimoniale scrise</TestimonialsHeading>
        <TestimonialsSubtitle>
          Recenzii Google de la oameni pentru care am realizat proiecte în
          trecut
        </TestimonialsSubtitle>
        <GoogleReviewsBanner />
      </WrittenTestimonialsTitle>

      <StyledTestimonialsContainer className="container">
        <StyledRow className="row">
          {testimonials.map((t, index) => (
            <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
              <TestimonialWrittenCard
                key={index}
                img={t.profile_pic}
                stars={t.stars}
                content={t.testimonial_content}
                name={t.user_name}
                profession={t.profession}
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
