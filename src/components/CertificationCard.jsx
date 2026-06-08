import styled from "styled-components";

const StyledCertificationCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`;

const Desc = styled.p`
  font-size: 1.125rem;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: auto;
  gap: 0.5rem;
`;

const StyledLink = styled.a`
  flex: 1;
  background: rgba(31, 55, 69, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(31, 55, 69, 0.5);
  transition: all 0.2s ease-in-out;

  @media (min-width: 992px) {
    &:hover {
      background: rgba(31, 55, 69, 0.75);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(7.5px);
      -webkit-backdrop-filter: blur(7.5px);
      border: 1px solid rgba(31, 55, 69, 0.75);
    }
  }

  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

function CertificationCard({ title, desc, cert }) {
  async function handleDownload(e) {
    e.preventDefault();

    try {
      const response = await fetch(cert);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed: ", error);
    }
  }

  return (
    <StyledCertificationCard>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <Buttons>
        <StyledLink href={cert} target="blank" rel="noopener noreferrer">
          Vizualizează
        </StyledLink>
        <StyledLink href={cert} onClick={handleDownload}>
          Descarcă
        </StyledLink>
      </Buttons>
    </StyledCertificationCard>
  );
}

export default CertificationCard;
