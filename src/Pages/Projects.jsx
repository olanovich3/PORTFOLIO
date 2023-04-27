import styled from "styled-components";
import PokeApi from "../ui-components/PokeApi";
import Swapit from "../ui-components/Swapit";
import FinalFantasy from "../ui-components/FinalFantasy";

const ProjectsStyled = styled.main`
  padding: 2rem;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 1rem;
`;

const Projects = () => {
  return (
    <ProjectsStyled>
      <PokeApi />
      <FinalFantasy />
      <Swapit />
    </ProjectsStyled>
  );
};

export default Projects;
