import React from 'react';
import styles from './styles.module.scss';

type InputGroupProps = {
  label: string;
};

const InputGroup = ({ label }: InputGroupProps) => {
  return (
    <div className={styles.group}>
      <label>{label}</label>
      <input type="text" />
    </div>
  );
};

export default InputGroup;
