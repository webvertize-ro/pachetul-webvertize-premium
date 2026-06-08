import { useState } from "react";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";

const StyledPhotoGallery = styled.div`
  padding: 5rem 0;
  background-color: #0f2f5a;
  color: #fff;

  @media (max-width: 576px) {
    padding: 3rem 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 3.5rem 1.75rem;
  }
`;

const GalleryHeader = styled.div`
  margin-bottom: 3rem;

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  line-height: 1.65;

  @media (max-width: 576px) {
    font-size: 0.95rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(11, 34, 64, 0.85) 0%,
      rgba(11, 34, 64, 0.2) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 0.5rem;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (min-width: 576px) {
    &:hover img {
      transform: scale(1.04);
    }

    &:hover .img-caption {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 576px) {
    padding: 0.2rem;
    margin-bottom: 0 !important;
  }
`;

const StyledImg = styled.img`
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
`;

const ImageCaption = styled.div`
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 2;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
`;

function PhotoGallery({ title, text, images }) {
  const [open, setOpen] = useState(false);
  const [indexImg, setIndexImg] = useState(0);

  const slides = images.map((i) => ({
    src: i.image,
    title: i.description,
    alt: i.description,
  }));

  const sets = images.map((i) => ({
    srcSet: i.srcSet,
  }));

  return (
    <>
      <StyledPhotoGallery>
        <div className="container">
          <GalleryHeader>
            <StyledH2>{title}</StyledH2>
            <StyledP>{text}</StyledP>
          </GalleryHeader>
          <div className="row g-3">
            {slides.map((img, i) => (
              <ImageContainer
                className="col-4 col-md-4"
                key={i}
                onClick={() => {
                  setOpen(true);
                  setIndexImg(i);
                }}
              >
                <StyledImg
                  srcSet={sets[i].srcSet}
                  src={img.src}
                  alt={img.alt}
                  className="img-fluid"
                  loading="lazy"
                />
                <ImageCaption className="img-caption">{img.title}</ImageCaption>
              </ImageContainer>
            ))}
          </div>
        </div>
      </StyledPhotoGallery>
      <Lightbox
        plugins={[Captions]}
        index={indexImg}
        open={open}
        close={() => setOpen(false)}
        slides={slides}
      />
    </>
  );
}

export default PhotoGallery;
