import React from 'react';
import styles from './styles.module.scss';

type InputGroupProps = {
  label: string;
};

const InputGroup = ({ label }: InputGroupProps) => {
  return (
    <div className={styles.radio}>
      <label htmlFor={label}>{label}</label>
      <input type="radio" name="radios" id={label} />
    </div>
  );
};

export default InputGroup;
