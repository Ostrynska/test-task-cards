import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

import styles from './Card.module.css';

const Card = ({ card, color }) => {
  const onLinkClick = () => {
    return alert('This page is under construction...');
  };
  const { icon, title, description, link } = card;
  return (
    <li className={styles.card} style={{ borderColor: color }}>
      <div className={styles.icon}>
        <Icon id={icon} color={color} />
      </div>
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.list}>
          {description &&
            description.length > 0 &&
            description.map((item, index) => (
              <li key={index} className={styles.item}>
                {item}
              </li>
            ))}
        </ul>
      </div>
      <a
        onClick={onLinkClick}
        href={link}
        className={styles.link}
        onMouseEnter={e => {
          e.target.style.color = color;
          e.target.style.textDecorationColor = color;
        }}
        onMouseLeave={e => {
          e.target.style.color = 'var(--description)';
          e.target.style.textDecorationColor = 'var(--description)';
        }}
      >
        View more
      </a>
    </li>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;
