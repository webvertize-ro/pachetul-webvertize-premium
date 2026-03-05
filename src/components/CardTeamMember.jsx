import styled from 'styled-components';
import Modal from './Modal';
import TeamMemberModalInner from './TeamMemberModalInner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled.div`
  background-image: url(${(props) => (props.img ? props.img : 'unset')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const GlassCard = styled.div`
  padding: 0.5rem;
  margin-top: auto;
  background-color: rgba(255, 255, 255, 0.45);
  border-radius: 0.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  /* border: 1px solid rgba(255, 255, 255, 0.64); */
  width: 90%;
`;

const GlassCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const StyledH5 = styled.h5`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const StyledP = styled.p``;

const Name = styled.h4`
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;

  &:hover {
    cursor: pointer;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

function CardTeamMember({ img, name, short_desc, long_desc, role }) {
  return (
    <Modal>
      <Modal.Open opens="form-modal">
        <StyledCard img={img}>
          <GlassCard>
            <GlassCardTitle>
              <Name>{name}</Name>
              <StyledFontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </GlassCardTitle>
            <div>
              <StyledH5>{role}</StyledH5>
              <StyledP>{short_desc}</StyledP>
            </div>
            <SocialsContainer>
              <StyledLink
                href="https://linkedin.com"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <StyledFontAwesomeIcon icon={faLinkedin} />
              </StyledLink>
              <StyledLink
                href="https://facebook.com"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <StyledFontAwesomeIcon icon={faFacebookSquare} />
              </StyledLink>
              <StyledLink
                href="https://instagram.com"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <StyledFontAwesomeIcon icon={faInstagramSquare} />
              </StyledLink>
            </SocialsContainer>
          </GlassCard>
        </StyledCard>
      </Modal.Open>
      <Modal.Window name="form-modal" title={name}>
        <TeamMemberModalInner img={img} name={name} long_desc={long_desc} />
      </Modal.Window>
    </Modal>
  );
}

export default CardTeamMember;
