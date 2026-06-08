import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const ContainerFluid = styled.div`
  background-color: #0b2240;
`;

const scroll = keyframes`
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
`;

const Scroller = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  padding: 4rem 0;
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
`;

const StyledH5 = styled.h5`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: rgba(168, 212, 245, 0.5);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ScrollerInner = styled.ul`
  display: flex;
  gap: 3rem;
  width: max-content;
  margin: 0;
  flex-wrap: wrap;
  list-style: none;
  padding: 0.5rem 0;

  animation: ${scroll}
    ${({ speed }) =>
      speed === "fast" ? "20s" : speed === "slow" ? "120s" : "40s"}
    linear infinite
    ${({ direction }) => (direction === "right" ? "reverse" : "forwards")};
`;

const PartnerImg = styled.img`
  height: 36px;
  width: auto;
  opacity: 0.55;
  filter: brightness(0) invert(1);
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

function OurPartners() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const { contentMap } = useContent();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReducedMotion(mediaQuery.matches);
  }, []);

  const partners = [1, 2, 3, 4, 5, 6].map((i) => ({
    image: c(contentMap, `home.partner_logo_${i}`),
    alt: c(contentMap, `home.partner_logo_${i}_alt`),
  }));

  const duplicatedPartners = [...partners, ...partners];

  return (
    <ContainerFluid className="container-fluid">
      <div className="container">
        <Scroller>
          <StyledH5>{c(contentMap, "home.partners_title")}</StyledH5>
          <ScrollerInner
            speed="slow"
            direction="left"
            style={{ animation: reducedMotion ? "none" : undefined }}
          >
            {duplicatedPartners.map((partner, index) => (
              <li key={index}>
                <PartnerImg src={partner.image} alt={partner.alt} />
              </li>
            ))}
          </ScrollerInner>
        </Scroller>
      </div>
    </ContainerFluid>
  );
}

export default OurPartners;
