import React, { createContext, useContext, useEffect, useState } from "react";

const WindowSizeContext = createContext();

export const useWindowSize = () => useContext(WindowSizeContext);

const WindowSizeProvider = ({ children }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value = {
    windowHeight,
    windowWidth,
  };

  return (
    <WindowSizeContext.Provider value={value}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export default WindowSizeProvider;
