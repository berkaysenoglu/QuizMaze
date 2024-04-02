import React from "react";
import "../styles/modal.scss";

const Modal = ({ score }) => {
  return (
    <div className="modal">
      <div className="modal-title">Your score : {score}</div>
      <div onClick={() => (window.location = "/")} className="modal-btn">
        Start Again
      </div>
    </div>
  );
};

export default Modal;
