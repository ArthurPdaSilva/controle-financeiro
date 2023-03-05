import React from 'react';
import styles from './styles.module.scss';
import InputProps from '../../@types/InputProps';

const InputGroup = ({ label, value, setValue }: InputProps) => {
  return (
    <div className={styles.group}>
      <label>{label}</label>
      <input
        type={label === 'Valor' ? 'number' : 'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputGroup;
