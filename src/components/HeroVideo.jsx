import { NavLink } from "react-router";
import styled from "styled-components";
import Modal from "./Modal";
import Form from "./Form";

const StyledHeroVideo = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 576px) {
    height: 70vh;
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
  background: linear-gradient(
    120deg,
    rgba(11, 34, 64, 0.72) 0%,
    rgba(11, 34, 64, 0.3) 60%
  );
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 5vw;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
  border: 0.5px solid rgba(168, 212, 245, 0.18);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 16px;
  padding: 2.5rem 3rem;
  max-width: 560px;

  @media (max-width: 576px) {
    height: 90%;
    width: 90%;
  }
`;

const StyledH1 = styled.h1`
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 500;
  letter-spacing: -0.02;
  line-height: 1.25;
  text-align: left;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const StyledP = styled.p`
  font-size: 1rem;
  color: rgba(168, 212, 245, 0.8);
  font-weight: 300;
  line-height: 1.65;
  text-align: left;
  margin-bottom: 1.75rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ViewProjectsButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #1a4f8a;
  white-space: nowrap;
  color: #e8f2ff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  border: none;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2563b0;
  }
`;

// Ghost Button
const RequestOfferButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0.5px solid rgba(96, 165, 232, 0.45);
  white-space: nowrap;
  color: rgba(168, 212, 245, 0.85);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: rgba(96, 165, 232, 0.9);
    color: #fff;
    background: transparent;
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
