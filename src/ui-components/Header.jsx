import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CheckBox from "./CheckBox";

const HeaderStyled = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  font-size: 24px;

  & .headerimg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 50%;
  }
  & .headerimg > h1 {
    display: block;
  }

  & .headerimg > img {
    width: 85px;
    height: 100px;
  }

  & .headerList {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    width: 50%;
    margin-right: 1rem;
  }
  & .headerList > li {
    display: flex;
    align-items: center;
    height: 100%;
  }

  & .link {
    display: flex;
    align-items: center;
    height: 40px;
    width: 40px;
  }
  & .navlink {
    display: block;
  }
  @media screen and (max-width: 1076px) {
    & .headerimg h1 {
      display: none;
    }
    & .headerimg {
      width: 20%;
    }
    @media screen and (max-width: 782px) {
      & .navlink {
        display: none;
      }
    }
    & .headerList {
      gap: 1.5rem;
      margin-right: 2rem;
    }
  }
`;
const Header = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (theme) {
      body.classList.remove("dark");
      body.classList.add("light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
    }
  }, [theme]);

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
          <NavLink className="navlink" to={"/"}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to={"/projects"}>
            PROJECTS
          </NavLink>
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
          <CheckBox action={() => toggleTheme()} />
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
