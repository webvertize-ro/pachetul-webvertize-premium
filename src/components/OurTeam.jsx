import Card from "./Card";
import { ourTeam } from "../data/ourTeam";
import CardTeamMember from "./CardTeamMember";
import styled from "styled-components";

const StyledOurTeam = styled.div`
  padding: 5rem 0;
  background-color: #0f2f5a;
`;

const StyledH2 = styled.h2`
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;
  margin-bottom: 0.75rem;
`;

const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(168, 212, 245, 0.75);
  max-width: 600px;
`;

function OurTeam() {
  return (
    <StyledOurTeam>
      <div className="container">
        <StyledH2>Echipa noastră</StyledH2>
        <StyledP>
          Cunoaște oamenii care fac posibilă activitatea noastră de zi cu zi —
          profesioniști dedicați, fiecare cu experiența și rolul său, gata să
          aducă valoare afacerii tale.
        </StyledP>
        <div className="row">
          {ourTeam.map((member) => (
            <div className="col-sm-6 col-lg-3 d-flex mb-4">
              <CardTeamMember
                img={member.img}
                name={member.name}
                short_desc={member.short_desc}
                long_desc={member.long_desc}
                role={member.role}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledOurTeam>
  );
}

export default OurTeam;
