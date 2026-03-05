import { useState } from 'react';
import styled from 'styled-components';
import Lightbox from 'yet-another-react-lightbox';
import { Captions } from 'yet-another-react-lightbox/plugins';

const StyledPhotoGallery = styled.div`
  padding: 3rem 0;
  background-color: #1f3745;
  color: #fff;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 1.75rem;
  }
`;

const StyledImg = styled.img`
  border-radius: 1rem;
  height: 100%;
  width: 100%;
`;

const ImageContainer = styled.div`
  /* position: relative; */
  transition: all 0.3s ease;

  @media (min-width: 992px) {
    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
    &:hover .img-caption {
      opacity: 1;
    }
  }

  @media (max-width: 576px) {
    padding: 0.2rem;
    margin-bottom: 0 !important;
  }
`;

const ImageCaption = styled.div`
  opacity: 0;
  transition: all 0.2s ease-in-out;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  cursor: pointer;

  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
  }
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
  font-size: 1.25rem;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

function PhotoGallery({ title, text, images }) {
  const [open, setOpen] = useState(false);
  const [indexImg, setIndexImg] = useState(0);

  const slides = images.map((i) => {
    return {
      src: i.img,
      title: i.title,
      alt: i.alt,
    };
  });

  const sets = images.map((i) => {
    return {
      srcSet: i.srcSet,
    };
  });

  return (
    <>
      <StyledPhotoGallery>
        <div className="container">
          <StyledH2>{title}</StyledH2>
          <StyledP>{text}</StyledP>
          <div className="row">
            {slides.map((img, i) => (
              <ImageContainer className="col-4 col-md-4 mb-4" key={i}>
                <StyledImg
                  srcSet={sets[i].srcSet}
                  sizes="(max-width: 576px) 33vw, (max-width: 992px) 33vw, calc(33vw - 4rem)"
                  src={img.src}
                  alt={img.alt}
                  className="img-fluid"
                  onClick={() => {
                    setOpen(true);
                    setIndexImg(i);
                  }}
                  loading="lazy"
                />
                <ImageCaption
                  className="img-caption"
                  onClick={() => {
                    setOpen(true);
                    setIndexImg(i);
                  }}
                >
                  {img.title}
                </ImageCaption>
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
