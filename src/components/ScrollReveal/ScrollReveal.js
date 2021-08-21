import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

export const ScrollReveal = ({ children }) => {
  const sectionRef = useRef();
  useEffect(() => {
    if (typeof(window) !== 'undefined' && sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 50,
        distance: '50px',
        origin: 'bottom'
      });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="media"
    >
      {children}
    </div>
  );
};