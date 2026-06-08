import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const GoogleReviewsLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: #fff;
`;

const GoogleFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 2rem;
`;

const GoogleReviewsText = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  color: #fff;
`;

function GoogleReviewsBanner() {
  const { contentMap } = useContent();

  return (
    <GoogleReviewsLogo>
      <GoogleFontAwesomeIcon icon={faGoogle} />
      <GoogleReviewsText>
        {c(contentMap, "testimonials.reviews_tag_text")}
      </GoogleReviewsText>
    </GoogleReviewsLogo>
  );
}

export default GoogleReviewsBanner;
