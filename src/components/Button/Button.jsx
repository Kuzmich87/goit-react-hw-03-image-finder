import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';

export const Button = ({ incrementPage }) => {
  return (
    <LoadMore type="button" onClick={incrementPage}>
      Load more
    </LoadMore>
  );
};

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};
