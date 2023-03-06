import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import useTables from '../../hooks/useTables';

type ManagerProps = {
  title: string;
  icon: JSX.Element;
};

const ManagerItem = ({ title, icon }: ManagerProps) => {
  const { handleValue, cells } = useTables();
  const [balance, setBalance] = useState('');

  useEffect(() => {
    setBalance(handleValue(title));
  }, [cells]);

  return (
    <div className={styles.itemContainer}>
      <div className={styles.title}>
        <span>{title} </span>
        {icon}
      </div>
      <span>R$ {balance}</span>
    </div>
  );
};

export default ManagerItem;
