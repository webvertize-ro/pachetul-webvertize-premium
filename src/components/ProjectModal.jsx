import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const StyledProjectModal = styled.div`
  padding: 1.5rem 2rem;

  @media (max-width: 576px) {
    padding: 0.5rem;
  }
`;

const Row = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  @media (max-width: 576px) {
    margin-bottom: 0.75rem !important;
    padding: 0 0.5rem;
  }
`;

const StyledImg = styled.img`
  border-radius: 0.75rem;
  border: 0.5px solid rgba(168, 212, 245, 0.15);
  cursor: pointer;
  width: 100%;
  display: block;
  transition:
    border-color 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    border-color: rgba(168, 212, 245, 0.45);
    opacity: 0.85;
  }
`;

const StyledH3 = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 0.5px solid rgba(168, 212, 245, 0.1);

  @media (max-width: 576px) {
    text-align: center;
    margin-top: 1rem;
  }
`;

const StyledP = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(168, 212, 245, 0.8);
  line-height: 1.75;

  @media (max-width: 576px) {
    text-align: left;
  }
`;

function ProjectModal({
  projectTitle,
  projectLongDesc,
  imageGallery,
  onLightboxOpen,
  onIndexImage,
}) {
  return (
    <StyledProjectModal>
      <div className="container">
        <Row className="row d-flex">
          <div className="col-lg-6">
            <div className="row g-2">
              {imageGallery.map((img, i) => (
                <ImgContainer className="col-6 col-md-6" key={img}>
                  <StyledImg
                    src={img.src}
                    className="img-fluid"
                    onClick={() => {
                      onLightboxOpen(true);
                      onIndexImage(i);
                    }}
                  />
                </ImgContainer>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <StyledH3>Detalii proiect</StyledH3>
            <StyledP>{projectLongDesc}</StyledP>
          </div>
        </Row>
      </div>
    </StyledProjectModal>
  );
}

export default ProjectModal;
