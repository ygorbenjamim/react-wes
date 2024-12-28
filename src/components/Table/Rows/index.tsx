"use client";
import { getColumns } from "../utils";
import Value from "../Value";
import { IRows } from "./interfaces/IRows";

export default function Rows<T extends object>({ data }: IRows<T>) {
  const columns = getColumns(data) as Array<keyof T>;

  return data.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {columns.map((column, columnIndex) => (
        <td key={columnIndex} {...(columnIndex === 0 ? { scope: "row" } : {})}>
          <Value value={row[column]} />
        </td>
      ))}
    </tr>
  ));
}
