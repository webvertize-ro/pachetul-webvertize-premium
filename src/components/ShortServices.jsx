import Modal from './Modal';
import shortServicesPic from '../assets/images/short_services_pic.jpg';
import Form from './Form';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { shortServices } from '../data/listData';
import ListItem from './ListItem';

const StyledShortServices = styled.div`
  padding: 3rem;
  background-color: #365764;
  color: #fff;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const Row = styled.div`
  @media (max-width: 992px) {
    gap: 2rem;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledImg = styled.img`
  max-width: 425px;
  border-radius: 1.5rem;
  border: 4px solid rgba(255, 255, 255, 0.5);
  position: relative;

  @media (max-width: 576px) {
    max-width: 275px;
  }
`;

const myAnimation = keyframes`
  0% {
    opacity: 0;
  } 
  100%{
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
`;

const IframeWrapper = styled.div`
  width: 750px;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
`;

const ModalWindowInner = styled.div`
  padding: 2rem 3rem;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const wave = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
`;

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #1f3745;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border: none;
  border-radius: 50%;
  padding: 1rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.75);
    animation: ${wave} 2s ease-out infinite;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  text-align: justify;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0;
`;

const StyledLi = styled.li`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #1b3c53;
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  cursor: default;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Button1 = styled(Link)`
  text-decoration: none;
  background-color: rgba(255, 101, 0, 0.65);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 1.25rem;
  border-radius: 0.75rem;
  padding: 1rem;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0.5rem;
  }

  @media (min-width: 992px) {
    flex: 1;
    &:hover {
      background-color: rgba(255, 101, 0, 0.8);
      backdrop-filter: blur(7.5px);
      -webkit-backdrop-filter: blur(7.5px);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
`;

const Button2 = styled(Link)`
  text-decoration: none;
  background-color: rgba(30, 62, 98, 0.65);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(42, 70, 87, 0.3);
  color: #fff;
  font-size: 1.25rem;
  border-radius: 0.75rem;
  padding: 1rem;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    flex: 1;
  }

  &:hover {
    background-color: rgba(30, 62, 98, 0.9);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
    border: 1px solid rgba(42, 70, 87, 0.5);
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 576px) and (max-width: 992px) {
    align-items: center;
  }
`;

function ShortServices() {
  return (
    <StyledShortServices>
      <div className="container">
        <Row className="row d-flex align-items-center">
          {/* Image with Play Button */}
          <VideoContainer className="col-lg-6" bgimg={shortServicesPic}>
            <ImageWrapper>
              <StyledImg src={shortServicesPic} alt="" className="img-fluid" />
            </ImageWrapper>
            <Modal>
              <Modal.Open opens="video-modal">
                <PlayButton>
                  <StyledFontAwesomeIcon icon={faPlay} />
                </PlayButton>
              </Modal.Open>
              <Modal.Window
                name="video-modal"
                bgColor="rgba(59, 94, 117, 0.3)"
                title="Video de prezentare"
              >
                <ModalWindowInner>
                  <IframeWrapper>
                    <StyledIframe
                      src="https://www.youtube.com/embed/jFum1tXS6H0?si=FR8U2WwAfJOZWdF6"
                      frameborder="0"
                      allowfullscreen
                    ></StyledIframe>
                  </IframeWrapper>
                </ModalWindowInner>
              </Modal.Window>
            </Modal>
          </VideoContainer>
          {/* Text */}
          <TextContent className="col-lg-6">
            <StyledH2>
              Toate serviciile de care ai nevoie, într-un singur loc
            </StyledH2>
            <StyledP>
              Lucrăm simplu, atent și adaptat fiecărui proiect. Ne concentrăm pe
              rezultate clare și colaborări pe termen lung.
            </StyledP>

            <StyledUl>
              {shortServices.map((item) => (
                <ListItem icon={item.icon} title={item.title} />
              ))}
            </StyledUl>
            <ButtonsContainer>
              <Button1 to="/services">Află mai multe</Button1>
              <Modal>
                <Modal.Open opens="form-modal">
                  <Button2>Cere o ofertă de preț</Button2>
                </Modal.Open>
                <Modal.Window
                  name="form-modal"
                  bgColor="rgba(59, 94, 117, 0.3)"
                >
                  <Form />
                </Modal.Window>
              </Modal>
            </ButtonsContainer>
          </TextContent>
        </Row>
      </div>
    </StyledShortServices>
  );
}

export default ShortServices;
