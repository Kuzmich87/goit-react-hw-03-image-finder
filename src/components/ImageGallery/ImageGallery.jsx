import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ children }) => {
  return <Gallery>{children}</Gallery>;
};

ImageGallery.prototype = {
  children: PropTypes.any.isRequired,
};
