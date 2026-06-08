import styled from "styled-components";
import { products } from "../data/products";
import Product from "./Product";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

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
  const { contentMap } = useContent();

  const products = [1, 2, 3, 4, 5, 6].map((i) => ({
    title: c(contentMap, `products.product_${i}_title`),
    description: c(contentMap, `products.product_${i}_description`),
    bg_image: c(contentMap, `products.product_${i}_bg_image`),
    button_text: c(contentMap, `products.product_${i}_button_text`),
    features: [1, 2, 3, 4, 5, 6].map((j) =>
      c(contentMap, `products.product_${i}_feature_${j}`),
    ),
  }));

  return (
    <StyledProducts>
      <div className="container">
        <StyledH2>{c(contentMap, "products.products_title")}</StyledH2>
        <StyledP>{c(contentMap, "products.products_description")}</StyledP>
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
