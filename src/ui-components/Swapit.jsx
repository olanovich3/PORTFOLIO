import styled from "styled-components";

const SwapitStyled = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;

  width: 33%;
  height: 80%;
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

const Swapit = () => {
  return (
    <SwapitStyled>
      <h2>SWAPIT PROJECT</h2>
      <p>
        Web application that aims to exchange goods at zero cost. In the
        application you can exchange messages with other users, save products as
        favourites, create ratings about other users and the complete CRUD
        process.
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
            alt="reactlogo"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1682496692/SocialMedia%20Icons/mongodb_od8bbc.png"
            alt="mongodb"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dysog0ybg/image/upload/v1682496692/SocialMedia%20Icons/nodejs_lvwzab.png"
            alt="nodejs"
          />
        </li>
      </ul>
      <ul className="videolink">
        <li>
          <h2>See more on...</h2>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=actUTj1WNSQ&ab_channel=CarlosOlanoGonzalez">
            <img
              className="youtube"
              src="https://res.cloudinary.com/dysog0ybg/image/upload/v1676301094/SocialMedia%20Icons/youtube_xh2nkm.png"
              alt="youtubelogo"
            />
          </a>
        </li>
      </ul>
    </SwapitStyled>
  );
};

export default Swapit;
