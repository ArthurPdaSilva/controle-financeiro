import React, { createContext, useState } from 'react';
import CellType from '../@types/CellType';

interface ManagerContextInterface {
  cells: CellType[];
  setCells: React.Dispatch<React.SetStateAction<CellType[]>>;
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

  return (
    <ManagerContext.Provider
      value={{
        cells,
        setCells,
      }}
    >
      {children}
    </ManagerContext.Provider>
  );
}
