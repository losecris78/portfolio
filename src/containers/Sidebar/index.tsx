import Tittle from "../../components/Tittle";
import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import { Descricao, BotaoTema, SidebarContainer } from "./styles";

type Props = {
  trocaTema: () => void;
};
const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Tittle fontSize={20}>Cristian L Sedas</Tittle>
      <Paragrafo tipo="secundario" fontSize={16}>
        losecris78
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
