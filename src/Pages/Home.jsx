import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeStyled = styled.main`
  padding: 2rem;
  overflow-y: auto;
  & .homeInformation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  & .homeInformation > h2 {
    font-size: 2.5rem;
  }

  & .homeText {
    width: 60%;
  }
  & .button {
    background-color: #72e7df;
    padding: 1rem 4rem;
    border: none;
    border-radius: 5%;
  }
  @media screen and (max-width: 782px) {
    & .homeInformation > h2 {
      font-size: 1.5rem;
    }
  }
`;

const Home = () => {
  let navigate = useNavigate();
  return (
    <HomeStyled>
      <nav className="homeInformation">
        <h2>
          <strong>HI, I´M CARLOS OLANO</strong>
        </h2>

        <p className="homeText">
          I´am a Web Developer, specialized in JavaScript, ReactJS, HTML5 and
          CSS3, committed to keep expanding my skills and knowledge in this
          area.
        </p>
        <p className="homeText">
          In addition, I love spending time with my family and friends. I
          believe that personal relationships are essential for a happy and
          balanced life. I enjoy working in teams and collaborating on creative
          and challenging projects. I am also passionate about sports, and I
          believe that physical activity is an important part of a healthy
          lifestyle.
        </p>
        <button onClick={() => navigate("/projects")} className="button">
          PROJECTS
        </button>
      </nav>
    </HomeStyled>
  );
};

export default Home;
