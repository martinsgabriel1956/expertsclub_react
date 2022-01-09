import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useMedia } from "./useMedia";

export const useDarkmode = () => {
  const [enableState, setEnableState] = useLocalStorage<boolean>(
    "darkmode",
    false
  );

  const preferDarkmode = usePreferDarkmode();

  const enabled = enableState || preferDarkmode;

  useEffect(() => {
    const className = "dark-mode";
    const element = document.body;

    enabled ? element.classList.add(className) : element.classList.remove(className);

  }, [enabled]);

  return [enabled, setEnableState];
}

const usePreferDarkmode = () => {
  return useMedia<boolean>(["prefers-color-scheme: dark"], [true], false);
};