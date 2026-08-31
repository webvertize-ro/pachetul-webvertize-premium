import styled from "styled-components";
import Card from "./Card";
import { services } from "../data/services";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";
import {
  faBolt,
  faGear,
  faHandshake,
  faShieldHalved,
  faStar,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

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

const CardWrapper = styled.div``;

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
  const { contentMap } = useContent();
  const services = [1, 2, 3, 4, 5, 6].map((i) => ({
    title: c(contentMap, `services.service_${i}_title`),
    description: c(contentMap, `services.service_${i}_description`),
    bg_image: c(contentMap, `services.service_${i}_bg_image`),
    icon: c(contentMap, `services.service_${i}_icon`),
  }));

  const iconMap = {
    "fa-solid fa-wrench": faWrench,
    "fa-solid fa-gear": faGear,
    "fa-solid fa-bolt": faBolt,
    "fa-solid fa-star": faStar,
    "fa-solid fa-shield-halved": faShieldHalved,
    "fa-solid fa-handshake": faHandshake,
  };

  return (
    <StyledServicesDetails>
      <Container className="container">
        <StyledH2>{c(contentMap, "services.services_title")}</StyledH2>
        <StyledP>{c(contentMap, "services.services_description")}</StyledP>
        <Services className="row d-flex justify-content-center">
          {services.map((service, i) => {
            return (
              <CardWrapper key={i} className="col-12 col-md-6 col-lg-4 mb-4 ">
                <Card
                  title={service.title}
                  text={service.description}
                  bg_img={service.bg_image}
                  icon={iconMap[service.icon]}
                />
              </CardWrapper>
            );
          })}
        </Services>
      </Container>
    </StyledServicesDetails>
  );
}

export default ServicesDetails;
