import styled from "styled-components";
import Card from "./Card";
import { services } from "../data/services";

const StyledServicesDetails = styled.div`
  padding: 5rem 0;
  color: #0c1e33;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
  background-color: #0b2240;

  @media (max-width: 576px) {
    padding: 3rem 0;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div``;

const Services = styled.div``;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 1rem;
  color: rgba(168, 212, 245, 0.75);
  font-weight: 300;
  max-width: 560px;
  margin-bottom: 3rem;
  color: rgba(168, 212, 245, 0.85);

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

function ServicesDetails() {
  return (
    <StyledServicesDetails>
      <Container className="container">
        <StyledH2>Serviciile noastre</StyledH2>
        <StyledP>
          Oferim servicii adaptate nevoilor tale, realizate cu atenție la
          detalii și focus pe calitate. Descoperă mai jos ce putem face pentru
          tine.
        </StyledP>
        <Services className="row d-flex justify-content-center">
          {services.map((service, i) => {
            return (
              <div key={i} className="col-12 col-md-6 col-lg-4 mb-4">
                <Card
                  title={service.title}
                  text={service.text}
                  bg_img={service.bg_img}
                  icon={service.icon}
                />
              </div>
            );
          })}
        </Services>
      </Container>
    </StyledServicesDetails>
  );
}

export default ServicesDetails;
