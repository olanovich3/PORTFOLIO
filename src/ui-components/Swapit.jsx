import styled from "styled-components";

const SwapitStyled = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 5px;

  & .logos {
    display: flex;
    flex-wrap: wrap;
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

const Swapit = () => {
  return (
    <SwapitStyled>
      <h1>SWAPIT PROJECT</h1>
      <p>
        Web application that aims to exchange goods at zero cost. In the
        application you can exchange messages with other users, save products as
        favourites, create ratings about other users and the complete CRUD
        process. Web connected to an API that has been designed from the ground
        up.
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
      <h2>Links:</h2>
      <div className="videolink">
        <a
          className="link"
          target="_blank"
          href="https://www.youtube.com/watch?v=actUTj1WNSQ&ab_channel=CarlosOlanoGonzalez"
        >
          <span>Video</span>
        </a>
        <a
          className="link"
          target="_blank"
          href="https://github.com/olanovich3/SWAPit_FrontEnd"
        >
          <span>Frontend repository</span>
        </a>
        <a
          className="link"
          target="_blank"
          href="https://github.com/olanovich3/SWAPit_BackEnd"
        >
          <span>Backend repository</span>
        </a>
      </div>
    </SwapitStyled>
  );
};

export default Swapit;
