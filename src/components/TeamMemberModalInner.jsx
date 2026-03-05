import {
  faFacebook,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledTeamMemberModalInner = styled.div`
  padding: 2rem;
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
  border-radius: 1rem;
  max-height: 500px;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 2.5rem;
`;

const MemberDescription = styled.div`
  height: 100%;
  justify-content: space-between;
`;

const StyledH3 = styled.h3``;

const Socials = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

function TeamMemberModalInner({ img, long_desc, name }) {
  return (
    <StyledTeamMemberModalInner>
      <Layout>
        <div className="d-flex justify-content-center">
          <StyledImg src={img} alt="member image" className="img-fluid" />
        </div>

        <MemberDescription className="d-flex flex-column">
          <div>
            <StyledH3>
              Despre <strong>{name}</strong>
            </StyledH3>
            <StyledP>{long_desc}</StyledP>
          </div>
          <Socials>
            <h4>Rețele de socializare</h4>
            <div className="d-flex">
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
            </div>
          </Socials>
        </MemberDescription>
      </Layout>
    </StyledTeamMemberModalInner>
  );
}

export default TeamMemberModalInner;
