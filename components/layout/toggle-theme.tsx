"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <Button
      onClick={toggleTheme}
      size="sm"
      variant="secondary"
      className="w-10 h-10 flex items-center justify-center border rounded-full  shadow-lg"
    >
      <div className="flex gap-2 dark:hidden">
        <Moon  size="8" />
        <span className="sr-only">Escuro</span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <Sun size={"8"}/>
        <span className="sr-only">Claro</span>
      </div>

      <span className="sr-only">Trocar de tema</span>
    </Button>
  );
};