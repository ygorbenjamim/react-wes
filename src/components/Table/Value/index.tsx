import { IValue } from "./interfaces/IValue";

export default function Value<T>({ value }: IValue<T>) {
  if (typeof value === "number") {
    return (
      <span style={{ textAlign: "right", display: "block" }}>{value}</span>
    );
  }
  return String(value ?? "");
}
