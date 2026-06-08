import styled from "styled-components";
import { projects } from "../data/projects";
import ProjectsCard from "./ProjectsCard";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

const StyledProjects = styled.div`
  padding: 5rem 0;
  border-top: 0.5px solid rgba(168, 212, 245, 0.1);
  background-color: #0b2240;

  @media (max-width: 576px) {
    padding: 3rem 0;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    padding: 3.5rem 0;
  }
`;

const Container = styled.div``;

const TitleSection = styled.div``;

const StyledH2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledP = styled.p`
  color: rgba(168, 212, 245, 0.75);
  font-weight: 300;
  font-size: 1rem;
  max-width: 560px;
  margin-bottom: 3rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 576px) and (max-width: 992px) {
    text-align: center;
  }
`;

function Projects() {
  const { contentMap } = useContent();
  const projects = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
    image: c(contentMap, `portfolio.project_${i}_card_image`),
    title: c(contentMap, `portfolio.project_${i}_card_title`),
    description: c(contentMap, `portfolio.project_${i}_card_description`),
    button_text: c(contentMap, `portfolio.project_${i}_card_button_text`),
    modal_title: c(contentMap, `portfolio.project_${i}_modal_title`),
    modal_description: c(
      contentMap,
      `portfolio.project_${i}_modal_description`,
    ),
    modal_images: [1, 2, 3, 4].map((j) => ({
      src: c(contentMap, `portfolio.project_${i}_modal_image_${j}`),
    })),
  }));

  return (
    <StyledProjects>
      <Container className="container">
        <StyledH2>{c(contentMap, "portfolio.projects_title")}</StyledH2>
        <StyledP>{c(contentMap, "portfolio.projects_description")}</StyledP>

        <div className="row">
          {projects.map((project) => (
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex">
              <ProjectsCard
                img={project.image}
                projectTitle={project.title}
                projectShortDesc={project.description}
                projectLongDesc={project.modal_description}
                imageGallery={project.modal_images}
              />
            </div>
          ))}
        </div>
      </Container>
    </StyledProjects>
  );
}

export default Projects;
