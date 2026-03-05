import { faPenToSquare, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledReviewGoogleButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-decoration: none;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;

  @media (min-width: 992px) {
    &:hover {
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(7.5px);
      -webkit-backdrop-filter: blur(7.5px);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }

  border-radius: 0.75rem;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
`;

function ReviewGoogleButton() {
  return (
    <StyledReviewGoogleButton href="https://google.com" target="_blank">
      <StyledFontAwesomeIcon icon={faPenToSquare} />
      <div>Scrie-ne o recenzie Google</div>
    </StyledReviewGoogleButton>
  );
}

export default ReviewGoogleButton;
