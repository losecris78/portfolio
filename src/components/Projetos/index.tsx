import Paragrafo from "../Paragrafo";
import Tittle from "../Tittle";
import { Card, LinkBotao } from "./styles";

const Projeto = () => (
  <Card>
    <Tittle>Projeto de Lista de Tarefas</Tittle>
    <Paragrafo tipo="secundario"> Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
);

export default Projeto;
