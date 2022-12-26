import React, { useState } from "react";
import Modal from "react-modal";

function Example() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      isOpen={true}
      //   onAfterOpen={afterOpenModal}
      //   onRequestClose={closeModal}
      //   style={customStyles}
      contentLabel="Example Modal"
    >
      <div>Modal yeah</div>
    </Modal>
  );
}

export default Example;
