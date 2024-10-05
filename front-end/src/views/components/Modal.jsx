import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import "./Modal.css";

const Modal = ({ children, open, onClose, className = "" }) => {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    } else {
      return;
    }
    return () => modal.close();
  }, [open]);
  return createPortal(
    <>
      <dialog ref={dialog} className={`modal ${className}`}>
        <div className="modal-content">
          {children}
          <button onClick={onClose}> Close</button>
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
};
export default Modal;
