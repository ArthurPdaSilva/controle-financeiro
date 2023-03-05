import React from 'react';
import Header from './components/Header';
import Manager from './components/Manager';
import Forms from './components/Forms';
import Table from './components/Table';
import ManagerProvider from './contexts/ManagerContext';

const App = () => {
  return (
    <ManagerProvider>
      <>
        <Header />
        <Manager />
        <Forms />
        <Table />
      </>
    </ManagerProvider>
  );
};

export default App;
