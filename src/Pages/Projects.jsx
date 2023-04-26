import styled from "styled-components";
import PokeApi from "../ui-components/PokeApi";
import Ffvii from "../ui-components/FFVII";
import Swapit from "../ui-components/Swapit";

const ProjectsStyled = styled.main`
  padding: 2rem;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
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
