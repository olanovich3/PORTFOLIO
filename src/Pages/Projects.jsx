import styled from "styled-components";
import ReactPlayer from "react-player";
import { useState } from "react";
import { useEffect } from "react";

const ProjectsStyled = styled.main`
  & .mainProject {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
  & .project {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  & .project > h2 {
    width: 30%;
  }
  & .project > p {
    width: 30%;
  }
  & .video-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    height: 50%;
  }
`;

const Projects = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <ProjectsStyled>
      <div className="mainProject">
        <nav className="project">
          <h2>FINAL FANTASY VII REACTJS</h2>
          <p>
            REACTJS | JavaScript | Eslint Prettier Vite | Styled-Components |
            Protected Paths | React Hooks
          </p>
          <div className="video-player">
            <ReactPlayer
              url={
                "https://www.youtube.com/watch?v=Op_Um61C__k&ab_channel=CarlosOlanoGonzalez"
              }
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
        </nav>
        <nav className="project">
          <h2>POKEAPI JavaScript</h2>
          <p>JavaScript</p>
          <div className="video-player">
            <ReactPlayer
              url={
                "https://www.youtube.com/watch?v=th7O4N33cMg&ab_channel=CarlosOlanoGonzalez"
              }
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
        </nav>
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
