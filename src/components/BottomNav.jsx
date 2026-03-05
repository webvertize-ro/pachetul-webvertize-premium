import { faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons';
import {
  faClock,
  faPhone,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import progrm from '../data/program.json';
import { useEffect, useRef, useState } from 'react';

const StyledBottomNav = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-radius: 0.75rem;
    color: #000;
    position: fixed;
    bottom: 0.5rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding: 0.75rem;
    z-index: 110;
    gap: 0.5rem;
    /* glassmorphism effect */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

const ButtonsContainer = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    width: 100%;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #142b3e;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.75rem;
  flex: 1;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
  color: #fff;
`;

const CallNow = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const Schedule = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;

const ProgramButton = styled.button`
  border: none;
  background-color: #1b3c53;
  padding: 0.5rem;
  border-radius: 0.75rem;
  display: flex;
  gap: 0.5rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScheduleText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

const ProgramBox = styled.div`
  position: absolute;
  bottom: 4.25rem;
  left: 0;
  right: 0;
  background-color: #e9e0d8;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  display: flex;

  /* glassmorphism effect */
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const StyledH5 = styled.h5`
  display: flex;
  justify-content: center;
`;

const StyledUl = styled.ul`
  padding: 0 1.5rem;
  margin: 0;
`;

const ProgramLine = styled.li`
  display: flex;
  gap: 0.25rem;
  font-size: 1.1rem;
  font-weight: ${(props) => (props.currenDay ? '800' : '400')};
`;

const DayName = styled.div``;

const DayHours = styled.div`
  margin-left: auto;
`;

function BottomNav() {
  const [programOpen, setProgramOpen] = useState(false);
  const ref = useRef(null);
  const days = [
    'Duminică',
    'Luni',
    'Marți',
    'Miercuri',
    'Joi',
    'Vineri',
    'Sâmbătă',
  ];
  const currentDate = new Date();
  // currentDate.setTime(currentDate.getTime() + 24 * 60 * 60 * 1000);
  const currentDay = days[currentDate.getDay()];

  console.log();

  function useClickOutside(ref, callback) {
    useEffect(() => {
      function handleClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }

      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }, [ref, callback]);
  }

  useClickOutside(ref, () => setProgramOpen(false));

  return (
    <StyledBottomNav ref={ref}>
      {/* Phone icon */}
      <ButtonsContainer>
        <StyledLink href="tel:+40712345678">
          <StyledFontAwesomeIcon icon={faPhoneVolume} />
          <CallNow>Sună acum!</CallNow>
        </StyledLink>

        {/* Schedule */}

        <ProgramButton onClick={() => setProgramOpen((o) => !o)}>
          <StyledFontAwesomeIcon icon={faClock} />
          <ScheduleText>{programOpen ? 'Închide' : 'Program'}</ScheduleText>
        </ProgramButton>
      </ButtonsContainer>

      {programOpen && (
        <ProgramBox>
          <StyledH5>Program de lucru</StyledH5>
          <StyledUl>
            {progrm.map((p) => (
              <ProgramLine key={p.day} currenDay={currentDay === p.day}>
                <DayName>{p.day}</DayName>
                <DayHours>{p.schedule}</DayHours>
              </ProgramLine>
            ))}
          </StyledUl>
        </ProgramBox>
      )}
    </StyledBottomNav>
  );
}

export default BottomNav;
