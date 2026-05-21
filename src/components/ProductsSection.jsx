import styled from "styled-components";
import { products } from "../data/products";
import Product from "./Product";

const StyledProducts = styled.div`
  padding: 5rem 0;

  @media (max-width: 576px) {
    padding: 3rem 0;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 3rem 0;
  }

  background-color: #0b2240;
`;

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
  font-size: 1.25rem;
  color: rgba(168, 212, 245, 0.75);
  font-weight: 300;
  font-size: 1rem;
  max-width: 560px;
  margin-bottom: 3rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
`;

function ProductsSection() {
  return (
    <StyledProducts>
      <div className="container">
        <StyledH2>Produsele noastre</StyledH2>
        <StyledP>
          Produsele noastre sunt alese și configurate pentru a oferi soluții
          eficiente și fiabile clienților noștri.
        </StyledP>
        <Row className="row g-4">
          {products.map((product) => (
            <div className="col-sm-6 col-md-4 ">
              <Product product={product} />
            </div>
          ))}
        </Row>
      </div>
    </StyledProducts>
  );
}

export default ProductsSection;
