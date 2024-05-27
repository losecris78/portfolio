import P from "./styles";

export type Props = {
  children: string;
  fontSize?: number;
  tipo?: "principal" | "secundario";
};
const Paragrafo = ({ children, tipo = "principal" }: Props) => (
  <P tipo={tipo}>{props.children}</P>
);

export default Paragrafo;
