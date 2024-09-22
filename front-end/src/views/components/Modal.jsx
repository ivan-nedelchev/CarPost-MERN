import PropTypes from "prop-types";
import "./Modal.css";
const Modal = ({ children, toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">{children}</div>
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
