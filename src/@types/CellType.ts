export default interface CellType {
  id: string;
  description: string;
  balance: number;
  type: 'Entrada' | 'Saída';
}
