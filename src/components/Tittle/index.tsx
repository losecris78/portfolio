import { Tittle as TittleStyle } from "./styles";
type Props = {
  children: string;
  fontSize?: number;
};
const Tittle = (props: Props) => (
  <TittleStyle fontSize={props.fontSize}>{props.children}</TittleStyle>
);

export default Tittle;
