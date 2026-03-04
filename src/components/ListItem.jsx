import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledLi = styled.li`
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 0.5rem;
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Bottom = styled.div``;

const StyledP = styled.p`
  font-size: 1.25rem;
`;

const Title = styled.div`
  font-size: 1.25rem;

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

function ListItem({ icon, title, subtitle }) {
  return (
    <StyledLi>
      <Top>
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
        <Title>{title}</Title>
      </Top>
      {subtitle && (
        <Bottom>
          <StyledP>{subtitle}</StyledP>
        </Bottom>
      )}
    </StyledLi>
  );
}

export default ListItem;
