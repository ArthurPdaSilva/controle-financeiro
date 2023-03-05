import React, { useCallback } from 'react';
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaTrash,
} from 'react-icons/fa';
import styles from './styles.module.scss';
import CellType from '../../@types/CellType';
import useTables from '../../hooks/useTables';

const Cell = ({ type, balance, description, id }: CellType) => {
  const { cells, setCells } = useTables();

  const handleDelete = (id: string) => {
    const table = cells.filter((e) => e.id !== id);
    setCells(table);
  };

  return (
    <tr className={styles.cell}>
      <td>{description}</td>
      <td>
        {balance.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </td>
      <td>
        {type === 'Entrada' ? (
          <FaArrowAltCircleUp size={25} color="green" />
        ) : (
          <FaArrowAltCircleDown size={25} color="red" />
        )}
      </td>
      <td style={{ cursor: 'pointer' }} onClick={() => handleDelete(id)}>
        <FaTrash size={25} />
      </td>
    </tr>
  );
};

export default Cell;
