import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledContactDataItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(59, 130, 212, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(10px);
  border: 0.5px solid rgba(96, 165, 232, 0.2);
  padding: 1rem;
  border-radius: 0.75rem;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(59, 130, 212, 0.15);
    border-color: rgba(96, 165, 232, 0.4);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 0.875rem;
  color: #60a5e8;
  flex-shrink: 0;
  margin-top: 2px;
`;

const UpperSide = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: rgba(168, 212, 245, 0.6);
  letter-spacing: 0.03em;
  font-weight: 500;
`;

const LowerSide = styled.div`
  padding-left: 1.5rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #60a5e8;
  }
`;

function ContactDataItem({ title, description, icon, link }) {
  return (
    <StyledContactDataItem>
      <UpperSide>
        <div>
          <StyledIcon icon={icon} />
        </div>
        <div>{title}</div>
      </UpperSide>
      <LowerSide>
        <StyledLink href={link} target="_blank">
          {description}
        </StyledLink>
      </LowerSide>
    </StyledContactDataItem>
  );
}

export default ContactDataItem;
