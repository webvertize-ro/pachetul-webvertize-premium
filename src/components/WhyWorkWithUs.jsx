import styled from "styled-components";
import whyWorkWithUsPic from "../assets/images/why_work_with_us_pic.avif";
import img400 from "../assets/images/why_work_with_us_pic-400.avif";
import img800 from "../assets/images/why_work_with_us_pic-800.avif";
import img1200 from "../assets/images/why_work_with_us_pic-1200.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import Modal from "./Modal";
import reasons from "../data/reasons.json";

const StyledSection = styled.section`
  padding: 5rem 0;
  color: #fff;
  background-color: #0f2f5a;

  @media (max-width: 576px) {
    padding: 3rem 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const StyledImg = styled.img`
  max-width: 425px;
  border-radius: 0.75rem;
  z-index: 20;

  @media (max-width: 576px) {
    width: 275px;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    width: 500px;
  }

  @media (min-width: 992px) {
    width: 600px;
  }
`;

const StyledTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const TitleAccent = styled.span`
  color: #60a5e8;
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 10;
`;

const StyledUl = styled.ul``;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
  color: #3b82d4;
`;

const ListItem = styled.li`
  display: flex;
  gap: 0.75rem;
`;

const StyledP = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const StyledStrong = styled.strong`
  font-weight: 600;
`;

const StyledButton = styled.button`
  background-color: #1a4f8a;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 28px;
  color: #e8f2ff;
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #2563b0;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

function WhyWorkWithUs() {
  return (
    <StyledSection
      id="details"
      className="details position-relative my-6 overflow-hidden"
    >
      <div className="container position-relative">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <div className="image-container d-flex justify-content-center">
              <StyledImg
                src={whyWorkWithUsPic}
                alt=""
                className="img-fluid"
                srcSet={`${img400} 400w, ${img800} 800w, ${img1200} 1200w`}
                sizes="(max-width: 576px) 33vw, (max-width: 992px) 33vw, calc(33vw - 4rem)"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <StyledTextContent className="mt-4">
              <StyledTitle className="mb-4">
                De ce să alegi serviciile{" "}
                <TitleAccent>afacerii noastre</TitleAccent>
              </StyledTitle>
              <StyledUl className="list-unstyled">
                {reasons.map((reason) => (
                  <ListItem className="d-flex mb-3" key={reason.strong}>
                    <StyledFontAwesomeIcon icon={faCheck} />
                    <StyledP>
                      <StyledStrong>{reason.strong}: </StyledStrong>
                      {reason.desc}
                    </StyledP>
                  </ListItem>
                ))}
              </StyledUl>
              <Modal>
                <Modal.Open opens="form-modal">
                  <StyledButton>Obține o ofertă de preț</StyledButton>
                </Modal.Open>
                <Modal.Window
                  name="form-modal"
                  bgColor="rgba(59, 94, 117, 0.3)"
                >
                  <Form />
                </Modal.Window>
              </Modal>
            </StyledTextContent>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}

export default WhyWorkWithUs;
