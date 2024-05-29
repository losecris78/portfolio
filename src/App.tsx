import { ThemeProvider } from "styled-components";
import Sidebar from "./containers/Sidebar/index";
import Sobre from "./containers/Sobre";
import Projetos from "./containers/Projetos";
import EstiloGlobal from "./styles";
import Container from "./styles";
import temaLight from "./themes/light";
import temaDark from "./themes/dark";
import { useState } from "react";

function App() {
  const [estaUsandoTemaDark, setestaUsandoTemaDark] = useState(false);
  function trocaTema() {
    setestaUsandoTemaDark(!estaUsandoTemaDark);
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
