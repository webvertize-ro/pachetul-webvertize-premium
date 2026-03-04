import styled, { keyframes } from 'styled-components';
import businessStreetViewImg from '../assets/images/business_street_view.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

const StyledStreetView = styled.div`
  color: #fff;
  padding: 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  max-width: 950px;
  border-radius: 1rem;

  @media (max-width: 576px) {
    max-width: 325px;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    max-width: 550px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 1.6rem;
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 1.25rem;

  @media (max-width: 576px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const IframeWrapper = styled.div`
  width: 750px;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  /* padding: 1.5rem; */
`;

const ModalWindowInner = styled.div`
  padding: 2rem 3rem;
`;

const StyledIframe = styled.iframe`
  /* border-radius: 1rem; */
  width: 100%;
  height: 100%;
  border: none;
`;

const WaveAnimation = keyframes`
    0% {
        transform: scale(1);
        opacity: 0.8;
    }
    100% {
        transform: scale(1.3);
        opacity: 0;
    }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  padding: 1.5rem;
  background-color: #3b5e75;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* glassmorphism effect */
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.75);
    animation: ${WaveAnimation} 2s ease-in-out infinite;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: #fff;
`;

function StreetView() {
  return (
    <StyledStreetView>
      <Container className="container">
        <StyledH2>Vedere stradală</StyledH2>
        <StyledP>Vezi exact unde poți găsi sediul nostru</StyledP>
        <ImageContainer>
          <StyledImg src={businessStreetViewImg} className="img-fluid" alt="" />
          <Modal>
            <Modal.Open opens="form-modal">
              <StyledButton>
                <StyledFontAwesomeIcon icon={faPlay} />
              </StyledButton>
            </Modal.Open>
            <Modal.Window
              name="form-modal"
              title="Vedere stradală"
              bgColor="rgba(59, 94, 117, 0.3)"
            >
              <ModalWindowInner>
                <IframeWrapper>
                  <StyledIframe
                    src="https://www.youtube.com/embed/eNSM5gVe10s?si=_y-hX8k3uIScBKsT"
                    frameborder="0"
                    allowfullscreen
                  ></StyledIframe>
                </IframeWrapper>
              </ModalWindowInner>
            </Modal.Window>
          </Modal>
        </ImageContainer>
      </Container>
    </StyledStreetView>
  );
}

export default StreetView;
