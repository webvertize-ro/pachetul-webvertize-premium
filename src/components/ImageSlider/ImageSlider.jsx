import styled from 'styled-components';
import { images } from '../../data/sliderImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faCircleDot,
  faCircleLeft,
  faCircleRight,
  faDisplay,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import React from 'react';

const StyledImageSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 300ms ease-in-out;
`;

const CaptionWrapper = styled.div``;

const Caption = styled.div`
  position: absolute;
  bottom: 12%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledH2 = styled.h2`
  color: #fff;
  font-weight: 600;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const StyledP = styled.p`
  color: #fff;
  font-weight: 500;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const SliderButton = styled.button`
  position: absolute;
  all: unset;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1rem;
  cursor: pointer;
  background-color: rgba(44, 88, 112, 0.5);
  padding: 0.75rem;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  transition: opacity 200ms ease-in-out;
  z-index: 100;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.75rem;
  color: #fff;
`;

const DotFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.75rem;
  color: #142b3e;
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  translate: -50%;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1.5rem;

  @media (max-width: 576px) {
    padding: 0.25rem 1rem;
  }
`;

const Dot = styled.button`
  position: absolute;
  all: unset;
  display: block;
  cursor: pointer;
  transition: scale 150ms ease-in-out;
  display: flex;

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-visible {
      scale: 1.15;
    }

    &:focus-visible {
      outline: auto;
    }
  }
`;

function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  // Make slider automatic
  const autoplayRef = useRef(null);
  const AUTOPLAY_DELAY = 5000;

  function startAutoplay() {
    stopAutoplay();

    autoplayRef.current = setTimeout(() => {
      showNextImage();
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
  }

  // Restart autoplay whenever imageIndex changes
  useEffect(() => {
    startAutoplay();

    return stopAutoplay;
  }, [imageIndex]);

  return (
    <StyledImageSlider onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
      <ImageContainer>
        {images.map(({ url, alt, title, desc, caption }, index) => (
          <React.Fragment key={url}>
            <StyledImg
              src={url}
              alt={alt}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
            <CaptionWrapper>
              {index === imageIndex && (
                <Caption>
                  <StyledH2>{caption.title}</StyledH2>
                  <StyledP>{caption.subtitle}</StyledP>
                </Caption>
              )}
            </CaptionWrapper>
          </React.Fragment>
        ))}
      </ImageContainer>
      <SliderButton
        style={{ left: 0 }}
        onClick={showPrevImage}
        aria-label="Imaginea anterioară"
      >
        <StyledFontAwesomeIcon icon={faCircleLeft} />
      </SliderButton>
      <SliderButton
        style={{ right: 0 }}
        onClick={showNextImage}
        aria-label="Imaginea următoare"
      >
        <StyledFontAwesomeIcon icon={faCircleRight} />
      </SliderButton>

      <Dots>
        {images.map((_, index) => (
          <Dot
            aria-label={`imaginea-${index + 1}`}
            onClick={() => setImageIndex(index)}
            key={index}
          >
            {index === imageIndex ? (
              <DotFontAwesomeIcon icon={faCircleDot} />
            ) : (
              <DotFontAwesomeIcon icon={faCircle} />
            )}
          </Dot>
        ))}
      </Dots>
    </StyledImageSlider>
  );
}

export default ImageSlider;
