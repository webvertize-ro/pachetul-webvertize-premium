import styled from "styled-components";
import Modal from "./Modal";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

const StyledProjectsCard = styled.div`
  width: 100%;
  background-image: url(${(props) => (props.img ? props.img : "unset")});
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem 1.5rem;
  cursor: pointer;
  padding-top: 15rem;

  position: relative;
  transition: transform 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(11, 34, 64, 0.35);
    border-radius: 0.75rem;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardInfo = styled.div`
  margin-top: auto;
  background: rgba(15, 47, 90, 0.82);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.5px solid rgba(168, 212, 245, 0.2);
  border-radius: 0.5rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const StyledH5 = styled.h5`
  text-align: center;
  font-weight: 500;
  color: #ffffff;
  font-size: 0.95rem;
`;

const StyledP = styled.p`
  text-align: center;
  font-weight: 300;
  color: rgba(168, 212, 245, 0.75);
  font-size: 0.875rem;
`;

const StyledButton = styled.button`
  background-color: #1a4f8a;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 20px;
  color: #e8f2ff;
  cursor: pointer;
  margin-top: auto;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2563b0;
  }
`;

function ProjectsCard({
  img,
  projectTitle,
  projectShortDesc,
  projectLongDesc,
  imageGallery,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [indexImg, setIndexImg] = useState(0);

  // console.log("imageGallery: ", imageGallery);

  return (
    <>
      <Modal>
        <Modal.Open opens="form-modal">
          {/* This is the actual Card */}
          <StyledProjectsCard img={img}>
            <CardInfo>
              <StyledH5>{projectTitle}</StyledH5>
              <StyledP>{projectShortDesc}</StyledP>
              <StyledButton>Vezi detalii</StyledButton>
            </CardInfo>
          </StyledProjectsCard>
        </Modal.Open>
        <Modal.Window
          name="form-modal"
          bgColor="rgba(59, 94, 117, 0.5)"
          lightboxOpen={lightboxOpen}
        >
          <ProjectModal
            projectLongDesc={projectLongDesc}
            imageGallery={imageGallery}
            onLightboxOpen={setLightboxOpen}
            onIndexImage={setIndexImg}
          />
        </Modal.Window>
      </Modal>

      <Lightbox
        plugins={[Captions]}
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={imageGallery}
        index={indexImg}
        captions={{ position: "bottom" }}
      />
    </>
  );
}

export default ProjectsCard;
