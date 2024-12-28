import { getColumns } from "../utils";

export function getTotalColumns<T extends object>(data: T[]) {
  if (data.length == 0) return 0;
  var numberOfColumns = getColumns(data).length;
  return numberOfColumns;
}
