"use client";
import {
  getClassColumnSize,
  getClassContentArrangement,
  getLabelValue,
} from "./utils";
import { ITextInput } from "./interfaces/ITextInput";
import ErrorMessage from "../ErrorMessage";
import Label from "../Label";
import "./styles/index.css";

export default function TextInput({
  ref,
  label,
  labelPosition = "top",
  columnSize = "5/10",
  errorMessage,
}: ITextInput) {
  return (
    <div className={`input-wrapper ${getClassColumnSize(columnSize)}`}>
      <div
        className={`input-content ${getClassContentArrangement(labelPosition)}`}
      >
        <Label>{getLabelValue(label, labelPosition)}</Label>
        <input ref={ref}></input>
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  );
}
