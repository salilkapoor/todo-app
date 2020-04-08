import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import Button from "../../atoms/button";
import Modal from "../../atoms/modal";

import './Guidelines.scss'

const Portal = ({ children }) => {
  const modalRoot = document.getElementById("root");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, [el, modalRoot]);
  return createPortal(children, el);
};

const Guidelines = function () {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button className="guidelines__button" onClick={() => setShowModal(!showModal)}>i</Button>
      <Portal>{showModal && <Modal buttonHandler={setShowModal}/>}</Portal>
    </>
  );
};

export default Guidelines;
