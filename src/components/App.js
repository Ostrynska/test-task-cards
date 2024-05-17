import React from 'react';
import data from '../db/data.json';
import CardsList from './CardsList/CardsList';

function App() {
  return (
    <main>
      <h1 hidden>Test Task App</h1>
      <section>
        <h2 hidden>Cards Section</h2>
        <CardsList cards={data} />
      </section>
    </main>
  );
}

export default App;
