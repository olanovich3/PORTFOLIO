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

        <p className="homeText">I´am a Web Developer and my skills are in:</p>
        <Logos />

        <p className="homeText">
          About me... just to say that I love spending time with my family, my
          friends, playing sports, being happy as much as possible during the
          day and most of all "The Spanish aperitivo".
        </p>
        <button onClick={() => navigate("/projects")} className="button">
          <h2 className="buttontext">PROJECTS</h2>
        </button>
      </nav>
    </HomeStyled>
  );
};

export default Home;
