import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledTeamMemberModalInner = styled.div`
  padding: 1.5rem 2rem;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledImg = styled.img`
  border-radius: 0.75rem;
  max-height: 500px;
  object-fit: cover;
  width: 100%;
`;

const StyledP = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  color: rgba(168, 212, 245, 0.8);
  line-height: 1.7;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: rgba(168, 212, 245, 0.6);
  font-size: 1.3rem;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }
`;

const MemberDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledH3 = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 0.75rem;
  letter-spacing: 0.01em;

  strong {
    font-weight: 600;
    color: #a8d4f5;
  }
`;

const Socials = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const SocialsTitle = styled.h4`
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(168, 212, 245, 0.5);
  margin-bottom: 0.75rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

function TeamMemberModalInner({ img, long_desc, name }) {
  return (
    <StyledTeamMemberModalInner>
      <Layout>
        <div className="d-flex justify-content-center">
          <StyledImg src={img} alt="member image" className="img-fluid" />
        </div>

        <MemberDescription>
          <div>
            <StyledH3>
              Despre <strong>{name}</strong>
            </StyledH3>
            <StyledP>{long_desc}</StyledP>
          </div>
          <Socials>
            <SocialsTitle>Rețele de socializare</SocialsTitle>
            <SocialIcons>
              {/* LinkedIn */}
              <div>
                <StyledLink
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label={`Pagina de LinkedIn a membrului ${name}`}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </StyledLink>
              </div>
              {/* Facebook */}
              <div>
                <StyledLink
                  href="https://facebook.com"
                  target="_blank"
                  aria-label={`Pagina de Facebook a membrului ${name}`}
                >
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </StyledLink>
              </div>
              {/* Instragram */}
              <div>
                <StyledLink
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label={`Pagina de Instagram a membrului ${name}`}
                >
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </StyledLink>
              </div>
            </SocialIcons>
          </Socials>
        </MemberDescription>
      </Layout>
    </StyledTeamMemberModalInner>
  );
}

export default TeamMemberModalInner;
