"use client";
import { ITable } from "./interfaces/ITable";
import Rows from "./Rows";
import Columns from "./Columns";
import "./styles/index.css";
import Footer from "./Footer";

export default function Table<T extends object>({
  title,
  data,
  showTotal = false,
}: ITable<T>) {
  if (data.length === 0) {
    return <p>Nenhum dado disponível</p>;
  }

  return (
    <table>
      <caption>{title ? title : "Tabela de dados"} </caption>
      <thead>
        <Columns data={data} />
      </thead>
      <tbody>
        <Rows data={data} />
      </tbody>
      <tfoot>{showTotal ? <Footer data={data} /> : null}</tfoot>
    </table>
  );
}
