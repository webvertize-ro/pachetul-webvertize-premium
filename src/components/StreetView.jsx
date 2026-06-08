import styled from "styled-components";
import businessStreetViewImg from "../assets/images/business_street_view.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledStreetView = styled.div`
  color: #fff;
  padding: 5rem 0;
  background-color: #0f2f5a;

  @media (max-width: 576px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 0.75rem;
  border: 0.5px solid rgba(168, 212, 245, 0.15);
  display: block;

  @media (max-width: 576px) {
    max-width: 325px;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    max-width: 550px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1.6rem;
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 1rem;
  color: rgba(168, 212, 245, 0.75);
  font-weight: 300;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
`;

const IframeWrapper = styled.div`
  width: 750px;
  height: 400px;
  border-radius: 0.75rem;
  overflow: hidden;
`;

const ModalWindowInner = styled.div`
  padding: 1.5rem 2rem;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.5px solid rgba(168, 212, 245, 0.25);
  padding: 1.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(15, 47, 90, 0.82);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(26, 79, 138, 0.95);
    border-color: rgba(168, 212, 245, 0.45);
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: #fff;
`;

function StreetView() {
  const { contentMap } = useContent();

  return (
    <StyledStreetView>
      <Container className="container">
        <StyledH2>{c(contentMap, "contact.street_view_title")}</StyledH2>
        <StyledP>{c(contentMap, "contact.street_view_description")}</StyledP>
        <ImageContainer>
          <StyledImg
            src={c(contentMap, "contact.street_view_image")}
            className="img-fluid"
            alt=""
          />
          <Modal>
            <Modal.Open opens="form-modal">
              <StyledButton aria-label="Deschide modalul cu videoclipul cu vederea stradală a afacerii">
                <StyledFontAwesomeIcon icon={faPlay} />
              </StyledButton>
            </Modal.Open>
            <Modal.Window
              name="form-modal"
              title="Vedere stradală"
              bgColor="rgba(59, 94, 117, 0.3)"
            >
              <ModalWindowInner>
                <IframeWrapper>
                  <StyledIframe
                    src={c(contentMap, "contact.street_view_video_url")}
                    frameborder="0"
                    allowfullscreen
                  ></StyledIframe>
                </IframeWrapper>
              </ModalWindowInner>
            </Modal.Window>
          </Modal>
        </ImageContainer>
      </Container>
    </StyledStreetView>
  );
}

export default StreetView;
