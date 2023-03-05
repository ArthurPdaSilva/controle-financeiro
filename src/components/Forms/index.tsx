import React, { FormEvent, useCallback, useState } from 'react';
import InputGroup from '../InputGroup';
import RadioGroup from '../RadioGroup';
import useTables from '../../hooks/useTables';
import CellType from '../../@types/CellType';
import { v4 } from 'uuid';
import styles from './styles.module.scss';

const Forms = () => {
  const { cells, setCells } = useTables();
  const types = ['Entrada', 'Saída'];
  const [description, setDescription] = useState('');
  const [balance, setBalance] = useState('');
  const [typeSelected, setTypeSelected] = useState('Entrada');

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const cell: CellType = {
        id: v4(),
        balance: balance as unknown as number,
        type: typeSelected as 'Entrada' | 'Saída',
        description,
      };
      setCells([...cells, cell]);
      setBalance('');
      setDescription('');
    },
    [
      description,
      balance,
      typeSelected,
      cells,
      setCells,
      setBalance,
      setDescription,
    ],
  );

  return (
    <form className={styles.forms} onSubmit={handleSubmit}>
      <InputGroup
        label="Descrição"
        value={description}
        setValue={setDescription}
      />
      <InputGroup label="Valor" value={balance} setValue={setBalance} />

      {types.map((e) => (
        <RadioGroup label={e} setValue={setTypeSelected} key={e} />
      ))}
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Forms;
