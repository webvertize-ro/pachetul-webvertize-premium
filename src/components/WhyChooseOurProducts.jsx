import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { whyChooseOurProducts } from "../data/listData";
import ListItem from "./ListItem";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

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
  const { contentMap } = useContent();
  const reasons = [1, 2, 3, 4, 5].map((i) =>
    c(contentMap, `products.quality_reason_${i}`),
  );

  return (
    <StyledWhyChooseOurProducts className="container-fluid">
      <div className="container">
        <StyledH2>{c(contentMap, "products.quality_title")}</StyledH2>
        <StyledP>{c(contentMap, "products.quality_description")}</StyledP>
        <div className="row">
          <div className="col-12">
            <StyledUl>
              {reasons.map((item) => (
                <ListItem title={item} />
              ))}
            </StyledUl>
          </div>
        </div>
      </div>
    </StyledWhyChooseOurProducts>
  );
}

export default WhyChooseOurProducts;
