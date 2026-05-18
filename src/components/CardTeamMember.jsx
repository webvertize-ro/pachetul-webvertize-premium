import styled from "styled-components";
import Modal from "./Modal";
import TeamMemberModalInner from "./TeamMemberModalInner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const StyledCard = styled.div`
  background-image: url(${(props) => (props.img ? props.img : "unset")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  border-radius: 0.75rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const GlassCard = styled.div`
  padding: 0.5rem;
  margin-top: auto;
  background-color: rgba(15, 47, 90, 0.82);
  border-radius: 0.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(3px);
  border: 0.5px solid rgba(168, 212, 245, 0.2);
  width: 90%;
`;

const GlassCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const StyledH5 = styled.h5`
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  color: rgba(168, 212, 245, 0.75);
  margin-bottom: 0.25rem;
`;

const StyledP = styled.p`
  font-size: 0.8rem;
  color: rgba(168, 212, 245, 0.65);
  margin: 0;
  line-height: 1.5;
`;

const Name = styled.h4`
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.03em;
  margin: 0;
  white-space: nowrap;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 0.85rem;
  color: rgba(168, 212, 245, 0.5);
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
  transition: color 0.2s ease;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  color: rgba(168, 212, 245, 0.5);

  &:hover {
    cursor: pointer;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: rgba(168, 212, 245, 0.6);
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #fff;
    transform: scale(1.15);
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
              <ArrowIcon icon={faArrowUpRightFromSquare} />
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
                <SocialIcon icon={faLinkedin} />
              </StyledLink>
              <StyledLink
                href="https://facebook.com"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <SocialIcon icon={faFacebookSquare} />
              </StyledLink>
              <StyledLink
                href="https://instagram.com"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <SocialIcon icon={faInstagramSquare} />
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
