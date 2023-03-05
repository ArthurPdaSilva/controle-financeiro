import React from 'react';
import { FaArrowAltCircleUp, FaTrash } from 'react-icons/fa';
import styles from './styles.module.scss';

const Cell = () => {
  return (
    <tr className={styles.cell}>
      <td>Bonificação</td>
      <td>R$ 1000,00</td>
      <td>
        <FaArrowAltCircleUp size={25} color="green" />
      </td>
      <td>
        <FaTrash size={25} />
      </td>
    </tr>
  );
};

export default Cell;
