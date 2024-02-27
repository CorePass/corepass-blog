import { createContext } from "react";
import React, { useState } from "react";

export const CustomCursorContext = createContext({
  type: "default",
  setType: () => {},
});

const CustomCursorManager = ({ children }) => {
  const [type, setType] = useState("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;
