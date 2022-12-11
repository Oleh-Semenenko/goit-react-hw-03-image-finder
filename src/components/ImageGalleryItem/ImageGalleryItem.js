import { Component } from 'react';
import ImageModal from '../ImageModal';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <GalleryItem>
        <GalleryImage
          src={webformatURL}
          width="200"
          alt={tags}
          onClick={this.toggleModal}
        />
        {this.state.isOpen && (
          <ImageModal
            url={largeImageURL}
            description={tags}
            modalIsOpen={this.state.isOpen}
            closeModal={this.toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}

export default ImageGalleryItem;
