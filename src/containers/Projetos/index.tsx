import Tittle from "../../components/Tittle";
import { Lista } from "./styles";
import Projeto from "../../components/Projetos/index";

const Projetos = () => (
  <section>
    <Tittle fontSize={16}>Projetos</Tittle>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
);
export default Projetos;
