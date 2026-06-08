import styled from "styled-components";
import { certifications } from "../data/certifications";
import CertificationCard from "./CertificationCard";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledCertificationsList = styled.div`
  padding: 3rem 0;
  background-color: #6b7580;
  color: #fff;

  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const StyledP = styled.p`
  font-size: 1.25rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

function CertificationsList() {
  const { contentMap } = useContent();

  const certs = [1, 2, 3, 4].map((i) => ({
    title: c(contentMap, `services.cert_${i}_title`),
    description: c(contentMap, `services.cert_${i}_description`),
    file_url: c(contentMap, `services.cert_${i}_file_url`),
  }));

  console.log("certs: ", certs);

  return (
    <StyledCertificationsList className="container-fluid">
      <div className="container">
        <StyledH2>{c(contentMap, "services.certs_title")}</StyledH2>
        <StyledP>{c(contentMap, "services.certs_description")}</StyledP>
        <div className="row">
          {certs.map((certification) => (
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex mb-4">
              <CertificationCard
                title={certification.title}
                desc={certification.description}
                cert={certification.file_url}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledCertificationsList>
  );
}

export default CertificationsList;
