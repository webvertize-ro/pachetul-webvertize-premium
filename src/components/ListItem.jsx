import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledLi = styled.li`
  padding: 0.9rem 1.25rem;
  border: 0.5px solid rgba(96, 165, 232, 0.2);
  background: rgba(59, 130, 212, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 0.5rem;
  width: 100%;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;
  cursor: default;

  &:hover {
    background: rgba(59, 130, 212, 0.2);
    border-color: rgba(96, 165, 232, 0.4);
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: #60a5e8;
  flex-shrink: 0;
`;

const Bottom = styled.div``;

const StyledP = styled.p`
  font-size: 0.875rem;
  color: rgba(168, 212, 245, 0.7);
  margin: 0;
  padding-left: 1.5rem;
  line-height: 1.6;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

function ListItem({ icon, title, subtitle }) {
  return (
    <StyledLi>
      <Top>
        <StyledIcon icon={icon} />
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
