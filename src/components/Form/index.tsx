"use client";
import { IForm } from "./interfaces/IForm";
import "./styles/index.css";

export default function Form({ children }: IForm) {
  return <form className="form-wrapper">{children}</form>;
}
