import styled from "styled-components";
type ButaoProps = {
  principal: boolean;
  fontSize?: string;
};

const Butao = styled.button<ButaoProps>`
  background-color: ${(props) => (props.principal ? "green" : "blue")};
  font-size: ${(props) => props.fontSize || "16px"};
`;
const BotaoPerigo = styled(Butao)`
  background-color: red;
  color: #fff;
`;
/*function Teste() {
  return (
    <>
      <Butao fontSize="18px" principal>
        Clique
      </Butao>
      <Butao fontSize="14px" principal={false}>
        Cancelar
      </Butao>
      <BotaoPerigo as="a" principal={false}>
        Cuidado, nao clique aqui
      </BotaoPerigo>
    </>
  );
};
export default Teste;*/
