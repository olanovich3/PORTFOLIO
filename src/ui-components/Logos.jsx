import styled from "styled-components";

const LogosStyled = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  li > img {
    width: 55px;
    height: 55px;
  }
  & .typescript {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  & .typescript > img {
    width: 55px;
    height: 55px;
  }
  & .typescript > p {
    font-size: 1.2rem;
  }
`;

const Logos = () => {
  return (
    <LogosStyled>
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
      <li className="typescript">
        <p>coming...</p>
        <img
          src="https://res.cloudinary.com/dysog0ybg/image/upload/v1682587796/SocialMedia%20Icons/typescript_bv1ojg.png"
          alt="typescriptlogo"
        />
      </li>
    </LogosStyled>
  );
};

export default Logos;
