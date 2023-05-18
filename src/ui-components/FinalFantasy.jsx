import styled from "styled-components";

const FinalFantasyStyled = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  width: 100%;
  border: 2px solid #ccc;

  & .logos {
    display: flex;
    padding: 0;
    gap: 1rem;
  }
  & .logos > li > img {
    display: flex;
    width: 50px;
    height: 50px;
  }
  & .videolink {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & .youtube {
    width: 50px;
    height: 50px;
  }
  & .link {
    text-decoration: underline;
  }
  & .link > span {
    font-size: 16px;
  }
`;

const FinalFantasy = () => {
  return (
    <FinalFantasyStyled>
      <h2>FINAL FANTASY VII PROJECT</h2>
      <p>
        Web application where you log in with username, email and password. Once
        inside the application you can search all the enemies by name, level,
        attack, defence, etc. of the game and the complete CRUD process. Web
        connected to an API modifiable from the CRUD.
      </p>
      <h2>Technologies:</h2>
      <ul className="logos">
        <li>
          <img
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1682496692/SocialMedia%20Icons/js_fm5k2f.png"
            alt="jslogo"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1682496692/SocialMedia%20Icons/html_gwsiyk.png"
            alt="htmllogo"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1682496692/SocialMedia%20Icons/css-3_a659tt.png"
            alt="csslogo"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1682500486/SocialMedia%20Icons/React-icon.svg_uttslt.png"
            alt="recatlogo"
          />
        </li>
      </ul>
      <h2>Links:</h2>
      <div className="videolink">
        <a
          className="link"
          target="_blank"
          href="https://www.youtube.com/watch?v=Op_Um61C__k&ab_channel=CarlosOlanoGonzalez"
        >
          <span>Video</span>
        </a>
        <a
          className="link"
          target="_blank"
          href="https://github.com/olanovich3/FFVII_REACTJS_PROJECT"
        >
          <span>Repository</span>
        </a>
      </div>
    </FinalFantasyStyled>
  );
};

export default FinalFantasy;
