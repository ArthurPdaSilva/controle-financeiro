import React from 'react';
import styles from './styles.module.scss';
import { FiAlertCircle } from 'react-icons/fi';

type ManagerProps = {
  title: string;
  icon: JSX.Element;
};

const ManagerItem = ({ title, icon }: ManagerProps) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.title}>
        <span>{title} </span>
        {icon}
      </div>
      <span>R$ 1500,00</span>
    </div>
  );
};

export default ManagerItem;
