import styled from "styled-components";

const PokeApiStyled = styled.nav`
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

const PokeApi = () => {
  return (
    <PokeApiStyled>
      <h2>POKEAPI</h2>
      <p>
        Web application where you can log in with your nickname and at any time
        you can change the background colour of your screen. There is a game
        (rock, paper, scissors) and a POKEAPI where you can search for a pokemon
        by name or feature and see the details of them.
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
      </ul>
      <h2>Links:</h2>
      <div className="videolink">
        <a
          className="link"
          target="_blank"
          href="https://www.youtube.com/watch?v=th7O4N33cMg&t=3s&ab_channel=CarlosOlanoGonzalez"
        >
          <span>Video</span>
        </a>
        <a
          className="link"
          target="_blank"
          href="https://github.com/olanovich3/APPS_HUB"
        >
          <span>Repository</span>
        </a>
      </div>
    </PokeApiStyled>
  );
};

export default PokeApi;
