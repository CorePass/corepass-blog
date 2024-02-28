import React, { useState } from "react";
import { CModal } from "@site/src/components/modal";
import { ModalContent } from "@site/src/modal-content";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Provider value={{ isOpen, setIsOpen }}>
      <CModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <ModalContent />
      </CModal>
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
