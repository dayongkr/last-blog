"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MdNightlight, MdSunny } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <Button
      variant="ghost"
      className="p-3 text-lg"
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
    >
      {theme === "dark" ? <MdSunny /> : <MdNightlight />}
    </Button>
  );
}
