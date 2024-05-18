import data from '../db/data.json';

import CardsList from '../components/CardsList/CardsList';

const Home = () => {
  return (
    <main>
      <h1 hidden>Test Task App</h1>
      <section>
        <h2 hidden>Cards Section</h2>
        <CardsList cards={data} />
      </section>
    </main>
  );
};

export default Home;
