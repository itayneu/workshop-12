import React, { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  // TODO 1: this hook should get a reference to an element and a callback, and will call it whenever you click outside of the element

  const handleOutsideClick = (e) => {
    if (isClickOutside(ref.current, e)) callback();
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
};

const isClickOutside = (element, clickEvent) => {
  return element && !element.contains(clickEvent.target);
};
