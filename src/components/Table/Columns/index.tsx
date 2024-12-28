"use client";
import { getColumns } from "../utils";
import { IColumns } from "./interfaces/IColumns";

export default function Columns<T extends object>({ data }: IColumns<T>) {
  const columns = getColumns(data);

  return (
    <tr>
      {columns.map((column) => (
        <th scope="col" key={column}>
          {column.toUpperCase()}
        </th>
      ))}
    </tr>
  );
}
