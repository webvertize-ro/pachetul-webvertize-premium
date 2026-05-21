import styled from "styled-components";
import Modal from "./Modal";
import ProductModalInner from "./ProductModalInner";

const Card = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  padding-top: 5rem;
  display: flex;
  padding: 7.5rem 0.75rem 0.75rem;
  cursor: pointer;
  height: 100%;
  overflow: hidden;

  position: relative;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(11, 34, 64, 0.35);
    border-radius: 0.75rem;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  background-color: rgba(15, 47, 90, 0.82);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 0.5px solid rgba(168, 212, 245, 0.2);
  border-radius: 0.5rem;
  color: #fff;
  padding: 0.75rem;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const StyledH4 = styled.h4`
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: rgba(168, 212, 245, 0.75);
  font-weight: 300;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 20px;
  color: #000;
  cursor: pointer;
  margin-top: auto;
  border-radius: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2563b0;
    color: #e8f2ff;
  }
`;

function Product({ product }) {
  return (
    <Modal>
      <Modal.Open opens="form-modal">
        <Card bgImg={product.img}>
          <CardInfo>
            <StyledH4>{product.product_title}</StyledH4>
            <StyledP>{product.short_desc}</StyledP>
            <StyledButton>Vezi detalii</StyledButton>
          </CardInfo>
        </Card>
      </Modal.Open>
      <Modal.Window name="form-modal" title={product.product_title}>
        <ProductModalInner
          title={product.product_title}
          features={product.features}
          img={product.img}
        />
      </Modal.Window>
    </Modal>
  );
}

export default Product;
