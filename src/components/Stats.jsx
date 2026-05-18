import {
  faHourglassHalf,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";

const StyledSection = styled.section`
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

const StyledSectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-align: center;
  padding-bottom: 0.75rem;

  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const StatItem = styled.div`
  @media (min-width: 992px) {
    border-right: 0.5px solid rgba(168, 212, 245, 0.15);

    &:last-child {
      border-right: none;
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #60a5e8;
`;

const CouterItem = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
`;

function Stats() {
  const sectionRef = useRef(null);
  const [startCounters, setStartCounters] = useState(false);
  const statItems = [
    {
      icon: faHourglassHalf,
      target: 12,
      name: "Ani de activitate",
    },
    {
      icon: faUser,
      target: 275,
      name: "Clienți mulțumiți",
    },
    {
      icon: faStar,
      target: 150,
      name: "Recenzii pozitive",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounters(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <StyledSection className="stats" ref={sectionRef}>
      <div className="container">
        <StyledSectionTitle>
          Câteva cifre despre experiența noastră
        </StyledSectionTitle>
        <div className="row my-6">
          {statItems.map((item) => (
            <StatItem className="col-md-4 col-sm-6 text-center">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <StyledFontAwesomeIcon icon={item.icon} />

                <Counter target={item.target} start={startCounters} />
              </div>
              <CouterItem>{item.name}</CouterItem>
            </StatItem>
          ))}
        </div>
      </div>
    </StyledSection>
  );
}

export default Stats;
