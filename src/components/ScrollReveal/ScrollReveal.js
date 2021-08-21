import React from "react";

export const ScrollReveal = ({ children }) => {
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="50"
      data-sal-easing="ease"
      className="media"
    >
      {children}
    </div>
  );
};