import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <button
        className="bg-blue-500 hover:bg-sky-700 text-white font-bold py-5 px-7 rounded-xl"
        onClick={openModal}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="text-center">
          <p className="text-xl font-semibold">Modal content here</p>
        </div>
      </Modal>
    </div>
  );
};

export default App;
