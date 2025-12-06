import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdDarkMode } from "react-icons/md";
const DarkMode = () => {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return (
    <Button onClick={() => setMode(!mode)}>
      Dark-mode
      <MdDarkMode />
    </Button>
  );
};

export default DarkMode;
