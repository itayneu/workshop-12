import React, { useEffect, useState } from "react";

export const useLocalStorage = (storageKey, fallbackState) => {
  // TODO 3: After every refresh your favorite pokemomn reset, implement this hook to save it
  // This should act like useState but get the initial value from local storage and save it there
  // you can use:
  // localStorage.getItem
  // localStorage.setItem
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(storageKey);
    return item ? JSON.parse(item) : fallbackState;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
