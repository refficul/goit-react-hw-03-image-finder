import { useState } from 'react';
import {
  ImageGalleryImage,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ imgs }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ImageGalleryItemStyled>
      <ImageGalleryImage
        src={imgs.webformatURL}
        alt="Image"
        onClick={() => openModal()}
      />
      {modalIsOpen && (
        <ModalWindow
          bigImg={imgs.largeImageURL}
          isOpen={modalIsOpen}
          closeModal={closeModal}
          alt="bigImage"
        />
      )}
    </ImageGalleryItemStyled>
  );
};
