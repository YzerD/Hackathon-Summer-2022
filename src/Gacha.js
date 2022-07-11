import box from './box.gif';
import React, {useState} from 'react';
import './App.css';
import Modal from "./components/Modal.js";
import Modalcss from './components/Modal.css';


function Gacha() {
    const [modalOpen, setModalOpen] = useState(false);
  return (

    <div className="Gacha">
      

      <header className="App-middle">

        <img src={box} className="App-logo" alt="logo" />


      
        <div className="App">
      <h1>Launch Special Banner</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        x1 Pull
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}

        </div>
      </header>
      </div>
  );
}

export default Gacha
