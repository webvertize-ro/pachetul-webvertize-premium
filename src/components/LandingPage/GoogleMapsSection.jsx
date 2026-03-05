import styled from 'styled-components';

const StyledGoogleMapsSection = styled.div`
  background-color: #142b3e;
  padding: 3rem 0;

  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 1.4rem;
  text-align: center;
  max-width: 920px;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledIframe = styled.iframe`
  height: 400px;
  border-radius: 1rem;
`;

function GoogleMapsSection() {
  return (
    <StyledGoogleMapsSection>
      <div className="container d-flex flex-column  gap-2">
        <TextContent>
          <StyledH2>Ne găsești ușor, chiar aproape de tine</StyledH2>
          <StyledP>
            Suntem un business local, cu sediu fizic, ușor de accesat.
            Indiferent dacă vrei să ne vizitezi sau doar să știi exact unde ne
            aflăm, locația noastră este afișată mai jos.
          </StyledP>
        </TextContent>
        <StyledIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.57954789398!2d26.012237353149644!3d44.43791870157616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1770355152777!5m2!1sen!2sro"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Hartă Google Maps cu locația afacerii"
        ></StyledIframe>
      </div>
    </StyledGoogleMapsSection>
  );
}

export default GoogleMapsSection;
