"use client";
import { ILabel } from "./interfaces/ILabel";
import "./styles/index.css";

export default function Label({ children }: ILabel) {
  return <label>{children}</label>;
}
