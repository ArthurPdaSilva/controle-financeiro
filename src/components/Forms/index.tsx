import React from 'react';
import styles from './styles.module.scss';
import InputGroup from '../InputGroup';
import RadioGroup from '../RadioGroup';

const Forms = () => {
  return (
    <form className={styles.forms}>
      <InputGroup label="Descrição" />
      <InputGroup label="Valor" />
      <RadioGroup label="Entrada" />
      <RadioGroup label="Saída" />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Forms;
