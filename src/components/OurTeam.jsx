import Card from "./Card";
import { ourTeam } from "../data/ourTeam";
import CardTeamMember from "./CardTeamMember";
import styled from "styled-components";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

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
  const { contentMap } = useContent();

  const ourTeam = [1, 2, 3, 4].map((i) => ({
    name: c(contentMap, `about.member_${i}_name`),
    function: c(contentMap, `about.member_${i}_function`),
    description: c(contentMap, `about.member_${i}_description`),
    long_description: c(contentMap, `about.member_${i}_long_description`),
    image: c(contentMap, `about.member_${i}_image`),
    linkedin: c(contentMap, `about.member_${i}_linkedin`),
    facebook: c(contentMap, `about.member_${i}_facebook`),
    instagram: c(contentMap, `about.member_${i}_instagram`),
  }));

  console.log("ourTeam: ", ourTeam);

  return (
    <StyledOurTeam>
      <div className="container">
        <StyledH2>{c(contentMap, "about.team_title")}</StyledH2>
        <StyledP>{c(contentMap, "about.team_description")}</StyledP>
        <div className="row">
          {ourTeam.map((member) => (
            <div className="col-sm-6 col-lg-3 d-flex mb-4">
              <CardTeamMember
                img={member.image}
                name={member.name}
                short_desc={member.description}
                long_desc={member.long_description}
                role={member.function}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledOurTeam>
  );
}

export default OurTeam;
