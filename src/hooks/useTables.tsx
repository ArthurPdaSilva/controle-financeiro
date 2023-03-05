import { useContext } from 'react';
import { ManagerContext } from '../contexts/ManagerContext';

export default function useTables() {
  return useContext(ManagerContext);
}
