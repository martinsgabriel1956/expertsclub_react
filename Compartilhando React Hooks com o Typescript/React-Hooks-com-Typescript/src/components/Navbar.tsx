import Toggle from "./Toggle";

import { useDarkmode } from "../hooks/useDarkmode";

export default function Navbar() {
  const [darkMode, setDarkMode] = useDarkmode();

  return (
    <div className="navbar">
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
