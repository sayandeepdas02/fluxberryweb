"use client";

import { RiComputerLine, RiMoonLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";

export function ThemeToggle({
  variant = "default",
}: {
  variant?: "default" | "white";
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[34px] w-[100px] shrink-0" />;
  }

  const options = [
    { value: "system", icon: RiComputerLine },
    { value: "light", icon: RiSunLine },
    { value: "dark", icon: RiMoonLine },
  ] as const;

  const isWhite = variant === "white";

  return (
    <div
      className={cx(
        "flex items-center gap-0.5 rounded-full p-0.5 border backdrop-blur-sm transition-colors",
        isWhite
          ? "bg-white/10 border-white/20"
          : "bg-slate-100/80 dark:bg-slate-900/80 border-slate-200/50 dark:border-slate-800/50",
      )}
    >
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = theme === option.value;
        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={cx(
              "flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200",
              isActive
                ? isWhite
                  ? "bg-white text-black shadow-sm"
                  : "bg-white dark:bg-slate-800 text-black dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50",
            )}
            aria-label={`Set ${option.value} theme`}
          >
            <Icon className="size-3.5" />
          </button>
        );
      })}
    </div>
  );
}
