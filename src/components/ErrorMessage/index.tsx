"use client";
import { IErrorMessage } from "./interfaces/IErrorMessage";
import "./styles/index.css";

export default function ErrorMessage({ children }: IErrorMessage) {
  return <p className="error-message">{children}</p>;
}
