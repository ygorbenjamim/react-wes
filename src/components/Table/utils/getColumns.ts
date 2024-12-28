export function getColumns<T extends object>(data: T[]) {
  if (data.length == 0) [];
  return Object.keys(data[0]);
}
