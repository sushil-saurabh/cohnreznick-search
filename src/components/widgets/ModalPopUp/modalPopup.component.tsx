import React from 'react';
import type { IModalProps } from './modalPopup.type';

const ModalPopUp = ({ isOpen, onClose, children }: IModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal-overlay">
        <div className="modal">
          <div className="popupheader">
            <button className="close-button" onClick={onClose}>
              ×
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalPopUp;
