import PropTypes from "prop-types";
import "./Modal.css";
const Modal = ({ children, toggleModal, headerText }) => {
  return (
    <>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2>{headerText}</h2>
          {children}
          <button className="close-modal" onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
};
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleModal: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
};

export default Modal;
