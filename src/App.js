import React, { Profiler } from 'react';

import Add from './components/organisms/add'
import List from './components/organisms/list'
import useToDoState from './hooks/useToDoState'
import Heading from './components/atoms/heading'
import { clockPerformance } from './utils/utils'

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
        <Profiler id="Add-Component" onRender={clockPerformance}>
          <Add addTask={addTask} />
        </Profiler>
        <Profiler id="List-Component" onRender={clockPerformance}>
          <List list={list} updateStatus={updateStatus} removeItem={removeItem} />
        </Profiler>
      </section>
    </main>
  );
}

export default React.memo(App);
