import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdDarkMode } from "react-icons/md";
const DarkMode = () => {
  const [mode, setMode] = useState(false);
  let modee = "Dark";
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  if (mode) {
    modee = "Light";
  } else {
    modee = "Dark";
  }
  return (
    <Button className="rounded-full" onClick={() => setMode(!mode)}>
      {/* {modee}-mode */}
      <MdDarkMode />
    </Button>
  );
};

export default DarkMode;
