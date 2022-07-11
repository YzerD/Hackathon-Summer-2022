import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Would You Like To Purchase x1 Play?</h1>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button><a
          className="App-link"
          href= "https://www.youtube.com/watch?v=rgLgPTXdR4M"
          target="_blank"
          rel="noopener noreferrer">
            Confirm
            </a></button>
        </div>
      </div>
    </div>
  );
}

export default Modal;