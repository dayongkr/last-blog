"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MdNightlight, MdSunny } from "react-icons/md";

export default function ThemeButton() {
  const { setTheme, resolvedTheme, theme } = useTheme();
  return (
    <Button
      variant="ghost"
      className="p-3 text-lg relative"
      onClick={() => {
        if (theme === "dark" || resolvedTheme === "dark") setTheme("light");
        else setTheme("dark");
      }}
    >
      <MdSunny className="scale-100 dark:scale-0 absolute" />
      <MdNightlight className="scale-0 dark:scale-100 absolute" />
    </Button>
  );
}
