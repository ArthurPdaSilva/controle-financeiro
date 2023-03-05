import React from 'react';
import styles from './styles.module.scss';
import InputProps from '../../@types/InputProps';

const InputGroup = ({ label, value, setValue }: InputProps) => {
  return (
    <div className={styles.radio}>
      <label htmlFor={label}>{label}</label>
      <input
        type="radio"
        name="radios"
        id={label}
        value={label}
        onChange={(e) => setValue(e.target.value)}
        checked={value === label}
      />
    </div>
  );
};

export default InputGroup;
