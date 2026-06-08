import styled from "styled-components";
import ourMissionImg from "../assets/images/our_mission_image.avif";
import Modal from "./Modal";
import Form from "./Form";
import { NavLink } from "react-router";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledOurMission = styled.div`
  padding: 5rem 0;
  background-color: #0b2240;
  color: #fff;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const StyledImg = styled.img`
  border-radius: 0.75rem;
  max-width: 425px;

  @media (max-width: 576px) {
    max-width: 300px;
  }
`;

const StyledH2 = styled.h2`
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const StyledP = styled.p`
  font-weight: 300;
  font-size: 1rem;
  color: rgba(168, 212, 245, 0.8);
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StyledButton = styled.button`
  background: #1a4f8a;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  color: #e8f2ff;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  backdrop-filter: blur(5px);
  border-radius: 0.5rem;
  padding: 0.75rem;
  flex: 1;
  -webkit-backdrop-filter: blur(5px);

  @media (min-width: 992px) {
    &:hover {
      background: #2563b0;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;

  background: transparent;
  border: 0.5px solid rgba(96, 165, 232, 0.4);
  border-radius: 8px;
  padding: 12px 24px;
  color: rgba(168, 212, 245, 0.85);
  font-weight: 500;
  font-size: 1rem;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media (min-width: 992px) {
    &:hover {
      background: transparent;
      border-color: rgba(96, 165, 232, 0.9);
      color: #fff;
    }
  }
  flex: 1;
`;

function OurMission() {
  const { contentMap } = useContent();

  return (
    <StyledOurMission>
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* Text */}
          <div className="col-lg-6 mb-4">
            <TextContent>
              <StyledH2>{c(contentMap, "about.mission_title")}</StyledH2>
              <StyledP>{c(contentMap, "about.mission_paragraph_1")}</StyledP>
              <StyledP>{c(contentMap, "about.mission_paragraph_2")}</StyledP>
              <StyledP>{c(contentMap, "about.mission_paragraph_3")}</StyledP>
              <StyledP>{c(contentMap, "about.mission_paragraph_4")}</StyledP>
            </TextContent>
            {/* Buttons */}
            <ButtonsContainer>
              <Modal>
                <Modal.Open opens="form-modal">
                  <StyledButton>
                    {c(contentMap, "about.mission_button_offer_text")}
                  </StyledButton>
                </Modal.Open>
                <Modal.Window
                  name="form-modal"
                  bgColor="rgba(59, 94, 117, 0.3)"
                >
                  <Form />
                </Modal.Window>
              </Modal>
              <StyledNavLink
                to={c(contentMap, "about.mission_button_portfolio_route")}
              >
                {c(contentMap, "about.mission_button_portfolio_text")}
              </StyledNavLink>
            </ButtonsContainer>
          </div>
          {/* Image */}
          <div className="col-lg-6 d-flex justify-content-center">
            <StyledImg
              src={c(contentMap, "about.mission_image")}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </StyledOurMission>
  );
}

export default OurMission;
