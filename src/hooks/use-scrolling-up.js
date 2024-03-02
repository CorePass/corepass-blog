import { useCallback, useEffect, useRef, useState } from "react";
// import { off, on } from '../utils'
/**
 * useScrollingUp custom react hook
 * @returns {boolean}
 */
export function on(obj, ...args) {
  obj.addEventListener(...args);
}

export function off(obj, ...args) {
  obj.removeEventListener(...args);
}
const useScrollingUp = () => {
  //if it is SSR then check you are now on the client and window object is available
  //   if (process.browser) {
  //     prevScroll = window.pageYOffset;
  //   }
  const prevScrollRef = useRef(window.pageYOffset);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [screenBegining, setScreenBegining] = useState(true);
  const [YOffset, setYOffset] = useState(0);
  const handleScroll = useCallback(() => {
    const currScroll = window.pageYOffset;
    setYOffset(currScroll);
    const isScrolled = prevScrollRef.current > currScroll;
    setScrollingUp(isScrolled);
    currScroll !== 0 ? setScreenBegining(false) : setScreenBegining(true);
    prevScrollRef.current = currScroll;
  }, []);

  useEffect(() => {
    on(window, "scroll", handleScroll, { passive: true });
    return () => {
      off(window, "scroll", handleScroll, { passive: true });
    };
  }, [handleScroll]);
  return { scrollingUp, screenBegining, YOffset };
};

export default useScrollingUp;
