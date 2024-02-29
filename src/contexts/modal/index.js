import React, { useState } from "react";
import { CModal } from "@site/src/components/modal";
import { ModalContent } from "@site/src/modal-content";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children, isOpen, setIsOpen }) => {
  return (
    <Provider value={{ isOpen, setIsOpen }}>
      <CModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <ModalContent setIsOpen={setIsOpen} />
      </CModal>
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
