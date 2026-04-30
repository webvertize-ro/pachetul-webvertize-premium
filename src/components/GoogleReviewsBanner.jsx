import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

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
  font-weight: bold;
  color: #fff;
`;

function GoogleReviewsBanner() {
  return (
    <GoogleReviewsLogo>
      <GoogleFontAwesomeIcon icon={faGoogle} />
      <GoogleReviewsText>Recenzii Google</GoogleReviewsText>
    </GoogleReviewsLogo>
  );
}

export default GoogleReviewsBanner;
