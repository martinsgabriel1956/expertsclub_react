import { useCallback, useState } from "react";

// Hook 
// Passando parâmetro booleano com o valor padrão false
export const useToggle = (initialState: boolean = false) : [boolean, () => void] => {
  // Iniciando o state
  const [state, setState] = useState<boolean>(initialState);

  // Função de memorização para o valor do state
  const toggle = useCallback(() : void => setState((state) => !state), []);

  return [state, toggle]
};