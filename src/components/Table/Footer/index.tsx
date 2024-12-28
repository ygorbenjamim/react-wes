import { getTotalColumns } from "../utils";
import { IFooter } from "./interfaces/IFooter";

export default function Footer<T extends object>({ data }: IFooter<T>) {
  return (
    <tr>
      <th scope="row" colSpan={getTotalColumns(data)}>
        Registros
      </th>
      <td>{data.length}</td>
    </tr>
  );
}
