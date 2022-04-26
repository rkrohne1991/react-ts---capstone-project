import React from 'react';
import ReactDOM from 'react-dom';

import { BackdropBackground, ModalContainer } from './modal.styles';

type ModalProps = {
  onClose: React.MouseEventHandler<HTMLDivElement>;
};

const Backdrop: React.FC<ModalProps> = ({ onClose }) => <BackdropBackground onClick={onClose} />;

const ModalOverlay: React.FC = ({ children }) => (
  <ModalContainer>
    <div>{children}</div>
  </ModalContainer>
);

const portalElement = document.getElementById('overlays') as any;

const Modal: React.FC<ModalProps> = ({ children, onClose }) => (
  <>
    {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>
        <div>{children}</div>
      </ModalOverlay>,
      portalElement,
    )}
  </>
);

export default Modal;
