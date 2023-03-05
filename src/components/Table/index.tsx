import React from 'react';
import styles from './styles.module.scss';
import TableHeader from '../TableHeader';
import Cell from '../Cell';
import useTables from '../../hooks/useTables';

const Table = () => {
  const { cells } = useTables();
  return (
    <table className={styles.table}>
      <TableHeader />
      <tbody className={styles.tableBody}>
        {cells.map((e) => (
          <Cell
            id={e.id}
            key={e.id}
            type={e.type}
            description={e.description}
            balance={e.balance}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
