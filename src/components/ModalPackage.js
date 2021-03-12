import React, { useState } from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#root');
const ModalPackage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Modal
        overlayClassName="overlay2"
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        // shouldCloseOnOverlayClick={false}
        // style={{
        //   overlay: {
        //     backgroundColor: 'blue',
        //   },
        //   content: {
        //     padding: '10px',
        //   },
        // }}
      >
        <h1 style={{ color: 'green' }}>modal title</h1>
        <p>modal Body</p>
        <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
      </Modal>
      <button onClick={() => setIsModalOpen(true)}>open modal</button>
    </div>
  );
};

export default ModalPackage;
