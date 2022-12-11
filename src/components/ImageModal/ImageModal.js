import Modal from 'react-modal';
import { LargeImage, modalStyles } from './ImageModal.styled';

Modal.setAppElement('#root');


const ImageModal = ({ url, description, modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <LargeImage src={url} alt={description} />
    </Modal>
  );
};

export default ImageModal;
