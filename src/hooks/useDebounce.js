import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  // TODO 4: Currently the app fetches pokemons on each char change in your input,
  //         implement useDebounce hook in order to minimize unnecessary requests.
  //         this hook should get a value and delay and return a debounced value

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
