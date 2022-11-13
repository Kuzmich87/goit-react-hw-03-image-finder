import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  img: { webformatURL, tags, largeImageURL },
  toggleModal,
  setModalImg,
}) => {
  return (
    <GalleryItem>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => {
          toggleModal();
          setModalImg(largeImageURL);
        }}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  setModalImg: PropTypes.func.isRequired,
};
