import { Fragment } from "react";
import ReactDOM from "react-dom";

import { BackdropBackground, ModalContainer } from "./modal.styles";

type ModalProps = {
  onClose: React.MouseEventHandler<HTMLDivElement>;
};

const Backdrop: React.FC<ModalProps> = ({ onClose }) => {
  return <BackdropBackground onClick={onClose}></BackdropBackground>;
};

const ModalOverlay: React.FC = (props) => {
  return (
    <ModalContainer>
      <div>{props.children}</div>
    </ModalContainer>
  );
};

const portalElement = document.getElementById("overlays") as any;

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <div>{children}</div>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
