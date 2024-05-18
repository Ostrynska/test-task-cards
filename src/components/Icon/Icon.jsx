import PropTypes from 'prop-types';

import icons from './sprite.svg';

const Icon = ({ id, color }) => {
  return (
    <svg style={{ fill: color }} max-height={100}>
      <use href={icons + `#${id}`} />
    </svg>
  );
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Icon;
