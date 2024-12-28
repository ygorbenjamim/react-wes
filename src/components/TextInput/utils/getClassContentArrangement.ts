enum cssPosition {
  "top" = "column",
  "left" = "row",
}

export function getClassContentArrangement(position: "top" | "left") {
  return cssPosition[position].toString();
}
