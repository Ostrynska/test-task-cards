import { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

import styles from './CardsList.module.css';

const CardsList = ({ cards }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(cards);
  const colors = ['#179D2E', '#0177B8', '#F5AF23', '#F02E2C'];

  return (
    <ul className={styles.list}>
      {data.map((card, index) => (
        <Card key={index} card={card} color={colors[index % colors.length]} />
      ))}
    </ul>
  );
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CardsList;
