import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { timeline } from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Modal from "./Modal";
import Form from "./Form";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  faComment,
  faFileSignature,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const StyledTimelineHowWeWork = styled.div`
  padding: 3rem 0;
  background-color: #1b3c53;
  color: #fff;

  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 2rem 0;
  }
`;

const HorizontalTimeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    padding-left: 0;
    margin-bottom: 0;
  }

  @media (min-width: 1140px) {
    border-top: 3px solid #e9ecef;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  transition: all 0.3s ease;

  @media (min-width: 992px) {
    &:hover {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(7.5px);
      -webkit-backdrop-filter: blur(7.5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
  }

  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 1rem;
  color: #fff;
`;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 1.25rem;

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const Row = styled.div`
  @media (min-width: 1140px) {
    margin-top: 4.5rem;
  }
`;

function TimelineHowWeWork() {
  const { contentMap } = useContent();
  const steps = [1, 2, 3, 4].map((i) => ({
    number: c(contentMap, `services.step_${i}_number`),
    title: c(contentMap, `services.step_${i}_title`),
    description: c(contentMap, `services.step_${i}_description`),
    icon: c(contentMap, `services.step_${i}_icon`),
    icon_num: c(contentMap, `services.step_${i}_icon_num`),
  }));

  const iconMap1 = {
    fa1: fa1,
    fa2: fa2,
    fa3: fa3,
    fa4: fa4,
  };

  const iconMap2 = {
    faComment: faComment,
    faFileSignature: faFileSignature,
    faHeadset: faHeadset,
  };

  return (
    <StyledTimelineHowWeWork>
      <div className="container">
        <StyledH2>{c(contentMap, "services.how_we_work_title")}</StyledH2>
        <StyledP>{c(contentMap, "services.how_we_work_description")}</StyledP>

        <Row className="row">
          <div className="col-lg-12">
            <HorizontalTimeline className="horizontal-timeline">
              <ul className="list-inline items">
                {steps.map(
                  (timeline, i) => (
                    console.log(iconMap2[timeline.icon]),
                    (
                      <TimelineItem
                        iconNum={iconMap1[timeline.icon_num]}
                        icon={iconMap2[timeline.icon]}
                        title={timeline.title}
                        desc={timeline.description}
                      />
                    )
                  ),
                )}
              </ul>
              <Modal>
                <Modal.Open opens="form-modal">
                  <StyledButton>Cere o ofertă de pret</StyledButton>
                </Modal.Open>
                <Modal.Window
                  name="form-modal"
                  bgColor="rgba(59, 94, 117, 0.5)"
                >
                  <Form />
                </Modal.Window>
              </Modal>
            </HorizontalTimeline>
          </div>
        </Row>
      </div>
    </StyledTimelineHowWeWork>
  );
}

export default TimelineHowWeWork;
