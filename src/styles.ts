import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  `;
export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-teamplate-columns: 128px auto;
  column-gap: 56px;

  img {
    max-width: 100%;
  }
  body {
    padding-top: 80px;
  }
`;
