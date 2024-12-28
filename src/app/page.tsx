"use client";
import Table from "@/components/Table";
import "./styles.css";

interface IUser {
  nome: string;
  idade: number;
  email: string;
  cpf: string;
  cep: string;
  dataNascimento?: Date;
  ativo?: boolean;
}

var users: IUser[] = [
  {
    nome: "ygor",
    idade: 25,
    email: "ygor@email.com",
    cpf: "10022030499",
    cep: "893484832",
    dataNascimento: new Date(),
    ativo: true,
  },
  {
    nome: "ygor",
    idade: 25,
    email: "ygor@email.com",
    cpf: "10022030499",
    cep: "893484832",
  },
];

export default function Home() {
  return (
    <div>
      <h1>Component preview</h1>
      <div className="preview">
        <Table title="Usuários" data={users} showTotal={false} />
      </div>
    </div>
  );
}
