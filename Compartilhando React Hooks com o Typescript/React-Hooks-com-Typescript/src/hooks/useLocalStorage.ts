import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // State par salvar no localStorage

  const [storagedValue, setStoragedValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storagedValue) : value;

      setStoragedValue(valueToStore);

      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // lidar com erro
      console.log(error);
    }
  };
  
  return [storagedValue, setValue] as const;
};
