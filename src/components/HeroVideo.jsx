import { NavLink } from "react-router";
import styled from "styled-components";
import Modal from "./Modal";
import Form from "./Form";

const StyledHeroVideo = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;

  @media (max-width: 576px) {
    height: 350px;
  }
`;

const VideoLayer = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 1rem;

  @media (max-width: 576px) {
    height: 90%;
    width: 90%;
  }
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ViewProjectsButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  background-color: rgba(11, 34, 64, 0.95);
  white-space: nowrap;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
`;

// Ghost Button
const RequestOfferButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #5b87b8;
  white-space: nowrap;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5b87b8;
  }
`;

function HeroVideo() {
  return (
    <StyledHeroVideo>
      {/* Video layer */}
      <VideoLayer
        autoPlay
        muted
        loop
        playsInline
        poster="https://ebsaptaehndiwvjdbqnm.supabase.co/storage/v1/object/public/website-assets/49e00d1c-b989-41c3-a898-62c9500fcb64/video_poster.png"
      >
        <source
          src="https://ebsaptaehndiwvjdbqnm.supabase.co/storage/v1/object/public/website-assets/49e00d1c-b989-41c3-a898-62c9500fcb64/business_presentation.mp4"
          type="video/mp4"
        />
      </VideoLayer>
      {/* Overlay layer */}
      <VideoOverlay />
      {/* Content layer */}
      <HeroContent>
        <StyledH1>Servicii profesionale în Cluj-Napoca</StyledH1>
        <StyledP>
          Oferim soluții de calitate pentru clienți care apreciază seriozitatea
          și atenția la detalii. Suntem aici să vă ajutăm la fiecare pas.
        </StyledP>
        <ButtonsContainer>
          <ViewProjectsButton to="/portfolio">Vezi proiecte</ViewProjectsButton>
          <Modal>
            <Modal.Open opens="form-modal">
              <RequestOfferButton>Cere o ofertă de preț</RequestOfferButton>
            </Modal.Open>
            <Modal.Window name="form-modal" bgColor="rgba(59, 94, 117, 0.5)">
              <Form />
            </Modal.Window>
          </Modal>
        </ButtonsContainer>
      </HeroContent>
    </StyledHeroVideo>
  );
}

export default HeroVideo;
