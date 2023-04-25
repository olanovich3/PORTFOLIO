import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #f9f4f4;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  & a {
    color: black;
  }
  & .headerimg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 50%;
  }
  & .headerimg > img {
    width: 85px;
    height: 100px;
  }
  & .headerList {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 2rem;
  }

  & .link {
    height: 25px;
    width: 25px;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <nav className="headerimg">
        <img
          className="homePicture"
          src="https://res.cloudinary.com/dysog0ybg/image/upload/v1682325087/ApplicationFrameHost_lco4Kfriqm_zpaqgx.png"
          alt="portrait"
        />
        <h1>CARLOS OLANO GONZALEZ</h1>
      </nav>
      <ul className="headerList">
        <li>
          <NavLink to={"/"}>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>PROJECTS</NavLink>
        </li>
        <li>
          <a href="https://github.com/olanovich3?tab=repositories">
            <img
              className="link"
              src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/github_a3wdej.png"
              alt="github"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/carlos-olano-gonz%C3%A1lez-338b3b68/">
            <img
              className="link"
              src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676300979/SocialMedia%20Icons/linkedin_rxabeq.png"
              alt="linkedin"
            />
          </a>
        </li>
        <li>
          <button>night</button>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
