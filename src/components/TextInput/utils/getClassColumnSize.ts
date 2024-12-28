enum columnSize {
  "1/10" = "width-1-10",
  "2/10" = "width-2-10",
  "3/10" = "width-3-10",
  "4/10" = "width-4-10",
  "5/10" = "width-5-10",
  "6/10" = "width-6-10",
  "7/10" = "width-7-10",
  "8/10" = "width-8-10",
  "9/10" = "width-9-10",
  "10/10" = "width-10-10",
}

export function getClassColumnSize(
  fractionOfTheSize:
    | "1/10"
    | "2/10"
    | "3/10"
    | "4/10"
    | "5/10"
    | "6/10"
    | "7/10"
    | "8/10"
    | "9/10"
    | "10/10"
) {
  return columnSize[fractionOfTheSize];
}
