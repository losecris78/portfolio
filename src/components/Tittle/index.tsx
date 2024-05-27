import Titulo from "./styles";

export type Props = {
  children: string;
  fontSize?: number;
};
const Tittle = (props: Props) => (
  <Titulo fontSize={props.fontSize}>{props.children}</Titulo>
);

export default Tittle;
