import { useEffect, useState } from "react";

export const useMedia = <T>(queries: string[], values: T[], defaultValue: T) => {
  // Array de listagem de mediaqueries

  const mediaQueryList = queries.map(q => matchMedia(q));

  // Função que vai retornar o valor da medi query

  const getValue = () => {
    const index = mediaQueryList.findIndex(mql => mql.matches);
    return values?.[index] || defaultValue;
  };

  // 

  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);

    mediaQueryList.forEach(mql => mql.addListener(handler));

    return () => mediaQueryList.forEach(mql => mql.removeListener(handler));
  });

  return value;
};

