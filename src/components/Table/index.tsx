import React from 'react';
import styles from './styles.module.scss';
import TableHeader from '../TableHeader';
import Cell from '../Cell';

const Table = () => {
  return (
    <table className={styles.table}>
      <TableHeader />
      <tbody className={styles.tableBody}>
        <Cell />
        <Cell />
      </tbody>
    </table>
  );
};

export default Table;
