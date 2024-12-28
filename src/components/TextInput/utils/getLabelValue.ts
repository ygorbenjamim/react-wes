export function getLabelValue(label: string, labelPosition: "top" | "left") {
  if (labelPosition == "left") return `${label}:`;
  return label;
}
