import styled from "styled-components";

const PokeApiStyled = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  width: 100%;
  :hover {
    scale: 1.05;
  }

  & .logos {
    display: flex;
    gap: 1rem;
  }
  & .logos > li > img {
    display: flex;
    width: 50px;
    height: 50px;
  }
  & .videolink {
    display: flex;
    align-items: center;
    justify-content: start;

    gap: 2rem;
  }

  & .youtube {
    width: 50px;
    height: 50px;
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
        by name or feature.
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

      <ul className="videolink">
        <li>
          <h2>See more on...</h2>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=th7O4N33cMg&t=3s&ab_channel=CarlosOlanoGonzalez">
            <img
              className="youtube"
              src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676301094/SocialMedia%20Icons/youtube_xh2nkm.png"
              alt="youtubelogo"
            />
          </a>
        </li>
      </ul>
    </PokeApiStyled>
  );
};

export default PokeApi;
