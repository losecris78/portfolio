import Sidebar from "./containers/Sidebar/index";
import Sobre from "./containers/Sobre";
import Projetos from "./containers/Projetos";
import EstiloGlobal from "./styles";
import Container from "./styles";
//import Teste from "./Teste";

function App() {
  return (
    <>
      {/*<Teste />*/}
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  );
}

export default App;
