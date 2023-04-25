import styled from "styled-components";

const GeneralLayoutStyled = styled.div`
  display: grid;
  grid-template-rows: 20vh 80vh;
  height: 100vh;
`;

const GeneralLayout = ({ children }) => {
  return <GeneralLayoutStyled>{children}</GeneralLayoutStyled>;
};

export default GeneralLayout;
