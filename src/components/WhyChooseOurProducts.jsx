import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { whyChooseOurProducts } from "../data/listData";
import ListItem from "./ListItem";

const StyledWhyChooseOurProducts = styled.div`
  padding: 5rem 0;
  background-color: #0b2240;
  color: #0c1e33;
  border-top: 0.5px solid rgba(26, 79, 138, 0.15);
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
`;

const StyledP = styled.p`
  font-size: 1rem;
  color: #fff;
  font-weight: 300;
  max-width: 560px;
  margin-bottom: 2.5rem;
`;

const StyledImg = styled.img`
  border-radius: 0.75rem;
  width: 100%;
  object-fit: cover;
`;

const StyledUl = styled.ul`
  list-style: none;
  font-size: 1.25rem;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

function WhyChooseOurProducts() {
  return (
    <StyledWhyChooseOurProducts className="container-fluid">
      <div className="container">
        <StyledH2>Calitate și performanță garantate</StyledH2>
        <StyledP>
          Folosim materiale premium și oferim soluții personalizate pentru
          rezultate durabile.
        </StyledP>
        <div className="row">
          <div className="col-12">
            <StyledUl>
              {whyChooseOurProducts.map((item) => (
                <ListItem icon={item.icon} title={item.title} />
              ))}
            </StyledUl>
          </div>
        </div>
      </div>
    </StyledWhyChooseOurProducts>
  );
}

export default WhyChooseOurProducts;
