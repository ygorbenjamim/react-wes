export interface ITable<T extends object> {
  title?: string;
  data: T[];
  showTotal?: boolean;
}
