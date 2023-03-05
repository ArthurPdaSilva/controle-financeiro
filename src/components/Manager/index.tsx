import React from 'react';
import styles from './styles.module.scss';
import ManagerItem from '../ManagerItem';
import {
  FaArrowAltCircleUp,
  FaArrowCircleDown,
  FaDollarSign,
} from 'react-icons/fa';

const Manager = () => {
  return (
    <div className={styles.manager}>
      <ManagerItem
        title="Entradas"
        icon={<FaArrowAltCircleUp size={25} color="green" />}
      />
      <ManagerItem
        title="Saídas"
        icon={<FaArrowCircleDown size={25} color="red" />}
      />
      <ManagerItem
        title="Total"
        icon={<FaDollarSign size={25} color="#3BB54A" />}
      />
    </div>
  );
};

export default Manager;
