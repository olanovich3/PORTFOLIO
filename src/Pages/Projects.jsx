import styled from "styled-components";
import PokeApi from "../ui-components/PokeApi";
import Ffvii from "../ui-components/FFVII";
import Swapit from "../ui-components/Swapit";

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
      <Ffvii />
      <Swapit />
    </ProjectsStyled>
  );
};

export default Projects;
