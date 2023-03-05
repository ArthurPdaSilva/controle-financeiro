import React from 'react';
import styles from './styles.module.scss';
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaTrash,
} from 'react-icons/fa';

const Table = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th className={styles.typeHeader}>Tipo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        <tr>
          <td>Bonificação</td>
          <td>R$ 1000,00</td>
          <td>
            <FaArrowAltCircleUp size={25} color="green" />
          </td>
          <td>
            <FaTrash size={25} />
          </td>
        </tr>
        <tr>
          <td>Alimentação</td>
          <td>R$ 500,00</td>
          <td>
            <FaArrowAltCircleDown size={25} color="red" />
          </td>
          <td>
            <FaTrash size={25} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
