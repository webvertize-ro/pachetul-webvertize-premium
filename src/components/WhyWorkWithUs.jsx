import styled from 'styled-components';
import whyWorkWithUsPic from '../assets/images/why_work_with_us_pic.avif';
import img400 from '../assets/images/why_work_with_us_pic-400.avif';
import img800 from '../assets/images/why_work_with_us_pic-800.avif';
import img1200 from '../assets/images/why_work_with_us_pic-1200.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Form from './Form';
import Modal from './Modal';
import reasons from '../data/reasons.json';

const StyledSection = styled.section`
  padding: 3rem 0;
  position: relative;
  color: #fff;
  background-color: #3a6a84;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 576px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const StyledImg = styled.img`
  max-width: 425px;
  border-radius: 1.5rem;

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
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledUl = styled.ul``;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: #d2c1b6;
`;

const ListItem = styled.li`
  display: flex;
  gap: 0.75rem;
`;

const StyledP = styled.p`
  margin: 0;
  font-size: 1.25rem;
  text-align: justify;
  font-weight: 300;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const StyledStrong = styled.strong`
  font-weight: 700;
`;

const StyledButton = styled.button`
  border: none;
  padding: 0.75rem;
  background-color: #000;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 0.75rem;

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
      <div className="container position-relative z-3">
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
                De ce să alegi serviciile{' '}
                <span className="text-primary">afacerii noastre</span>
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
