import React from 'react';
import styles from './styles.module.scss';

const TableHeader = () => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th>Descrição</th>
        <th>Valor</th>
        <th className={styles.typeHeader}>Tipo</th>
        <th>Ações</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
