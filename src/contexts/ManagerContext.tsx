import React, { createContext, useCallback, useState } from 'react';
import CellType from '../@types/CellType';

interface ManagerContextInterface {
  cells: CellType[];
  setCells: React.Dispatch<React.SetStateAction<CellType[]>>;
  handleValue: (typeBalance: string) => number;
}

export const ManagerContext = createContext<ManagerContextInterface>(
  {} as ManagerContextInterface,
);

export default function ManagerProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [cells, setCells] = useState<CellType[]>([]);

  function getTotal(total: number, item: CellType) {
    if (item.type === 'Entrada') return Number(total) + Number(item.balance);
    return Number(total) - Number(item.balance);
  }

  function getTotalByEntrada(total: number, item: CellType) {
    if (item.type === 'Entrada') return Number(total) + Number(item.balance);
    return Number(total);
  }

  function getTotalBySaida(total: number, item: CellType) {
    if (item.type === 'Saída') return Number(total) + Number(item.balance);
    return Number(total);
  }

  const handleValue = useCallback(
    (typeBalance: string) => {
      if (typeBalance === 'Total') {
        return cells.reduce(getTotal, 0);
      } else if (typeBalance === 'Entradas') {
        return cells.reduce(getTotalByEntrada, 0);
      } else {
        return cells.reduce(getTotalBySaida, 0);
      }
    },
    [cells],
  );

  return (
    <ManagerContext.Provider
      value={{
        cells,
        setCells,
        handleValue,
      }}
    >
      {children}
    </ManagerContext.Provider>
  );
}
