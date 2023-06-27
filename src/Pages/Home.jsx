import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logos from "../ui-components/Logos";

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
    font-size: 1.2rem;
    width: 60%;
  }
  & .button {
    background-color: #72e7df;
    padding: 1rem 4rem;
    border: none;
    border-radius: 5%;
    cursor: pointer;
  }
  @media screen and (max-width: 782px) {
    & .homeInformation > h2 {
      font-size: 1.3rem;
    }
    & .homeInformation {
      position: fixed;
      top: 80px; /* ajusta este valor según el tamaño de tu header */
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      gap: 16px;
    }
    & .button {
      padding: 0.5rem 3rem;
    }
    & .buttontext {
      font-size: 0.5rem;
    }
    & .homeText {
      font-size: 0.8rem;
    }
  }
`;
//prueba

const Home = () => {
  let navigate = useNavigate();

  return (
    <HomeStyled>
      <nav className="homeInformation">
        <h2>
          <strong>HI, I´M CARLOS</strong>
        </h2>

        <p className="homeText">I´am a Web Developer and my skills are in:</p>
        <Logos />

        <p className="homeText">
          About me...I recently discovered my passion for creating through code,
          and ever since, each day presents a fresh opportunity to learn and
          explore.
        </p>
        <button onClick={() => navigate("/projects")} className="button">
          <h2 className="buttontext">PROJECTS</h2>
        </button>
        <button className="button">
          <a
            className="link"
            target="_blank"
            href="https://drive.google.com/file/d/1tZOJv7AO_jt8boWn2mRzSD2hqWevIztU/view?usp=drive_link"
          >
            <h2 className="buttontext">CV</h2>
          </a>
        </button>
      </nav>
    </HomeStyled>
  );
};

export default Home;
