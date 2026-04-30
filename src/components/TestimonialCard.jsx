import styled from "styled-components";

import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faInfoCircle,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "styled-components";

const StyledTestimonialCard = styled.div``;

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

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border: none;
  border-radius: 50%;
  padding: 1rem;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.75);
    animation: ${WaveAnimation} 2s ease-in-out infinite;
  }
`;

const IframeWrapper = styled.div`
  width: 640px;
  height: 360px;
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const VideoTestimonialInner = styled.div`
  padding: 2rem 3rem;

  @media (max-width: 576px) {
    padding: 0.5rem;
  }
`;

const UserImageTop = styled.img`
  border-radius: 0.5rem;
  border: 2px solid #fff;
`;

const UserImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top center;
  border: 2px solid #fff;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserImageContainer = styled.div`
  position: relative;
`;

const UserNameAndProfession = styled.div`
  margin-top: 1rem;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UserNameName = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`;

const UserProfession = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

function TestimonialCard({ img, name, functionUser, imgUser, key, video }) {
  return (
    <StyledTestimonialCard
      className="col-sm-6 col-md-6 col-lg-3 mb-3"
      key={key}
    >
      {/* User Image */}
      <UserImageContainer>
        <UserImageTop src={img} className="img-fluid" />
        <Modal>
          <Modal.Open opens="testimonial-video">
            <PlayButton aria-label="Deschide modalul cu videoclip">
              <StyledFontAwesomeIcon icon={faPlay} />
            </PlayButton>
          </Modal.Open>
          <Modal.Window
            name="testimonial-video"
            bgColor="rgba(59, 94, 117, 0.3)"
            title={`Testimonial ${name}`}
          >
            <VideoTestimonialInner>
              <IframeWrapper>
                <StyledVideo
                  src={video}
                  autoPlay
                  controls
                  playsInline
                  muted
                ></StyledVideo>
              </IframeWrapper>
            </VideoTestimonialInner>
          </Modal.Window>
        </Modal>
      </UserImageContainer>
      <UserInfo>
        <UserImage src={img} className="img-fluid" />
        {/* Name & Function */}
        <UserNameAndProfession>
          <UserName>
            <div>
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <UserNameName>{name}</UserNameName>
          </UserName>
          <UserProfession>
            <FontAwesomeIcon icon={faBriefcase} />
            {functionUser}
          </UserProfession>
        </UserNameAndProfession>
      </UserInfo>
    </StyledTestimonialCard>
  );
}

export default TestimonialCard;
