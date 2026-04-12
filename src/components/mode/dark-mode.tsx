import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkMode = () => {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") return false;
    return true; 
  });

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [mode]);

  return (
    <Button className="rounded-full" onClick={() => setMode(!mode)}>
      {mode ? <MdLightMode /> : <MdDarkMode />}
    </Button>
  );
};

export default DarkMode;
