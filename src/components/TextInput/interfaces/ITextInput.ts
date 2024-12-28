export interface ITextInput {
  ref?: React.Ref<HTMLInputElement>;
  label: string;
  labelPosition?: "top" | "left";
  columnSize?:
    | "1/10"
    | "2/10"
    | "3/10"
    | "4/10"
    | "5/10"
    | "6/10"
    | "7/10"
    | "8/10"
    | "9/10"
    | "10/10";
  errorMessage?: string;
}
