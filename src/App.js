import React from 'react';

import Add from './components/organisms/add'
import List from './components/organisms/list'
import useToDoState from './hooks/useToDoState'
import Heading from './components/atoms/heading'

import './App.scss';

function App() {
  const {
    list,
    addTask,
    updateStatus,
    removeItem
  } = useToDoState();
  return (
    <main className="app">
      <header className="app__header">
        <Heading type="h2" className="app__header__heading">TO-DO</Heading>
      </header>
      <section className="app__section">
        <Add addTask={addTask} />
        <List list={list} updateStatus={updateStatus} removeItem={removeItem} />
      </section>
    </main>
  );
}

export default App;
