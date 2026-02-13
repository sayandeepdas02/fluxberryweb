import { Logos } from "./Logos";
import { cx } from "@/lib/utils";

export default function LogoCloud({
  variant = "white",
  className,
}: {
  variant?: "white";
  className?: string;
}) {
  const isWhite = variant === "white";

  return (
    <div
      className={cx(
        "grid grid-cols-3 sm:flex sm:flex-wrap items-center sm:justify-between w-full py-10 md:py-12 px-6 sm:px-8 md:px-16 gap-y-10 sm:gap-y-8 gap-x-4",
        isWhite ? "bg-transparent" : "bg-white dark:bg-slate-950",
        className,
      )}
    >
      <div className="flex items-center justify-center opacity-0 animate-logo delay-700 fill-mode-both">
        <Logos.BiltRewards
          className={cx(
            "w-18 md:w-20",
            isWhite
              ? "brightness-0 invert opacity-70"
              : "brightness-0 dark:brightness-0 dark:invert opacity-80",
          )}
        />
      </div>
      <div className="flex items-center justify-center opacity-0 animate-logo delay-700 fill-mode-both">
        <Logos.ModernTreasury
          className={cx(
            "w-32 md:w-40",
            isWhite
              ? "brightness-0 invert opacity-70"
              : "brightness-0 dark:brightness-0 dark:invert opacity-80",
          )}
        />
      </div>
      <div className="flex items-center justify-center opacity-0 animate-logo delay-700 fill-mode-both">
        <Logos.Alibaba
          className={cx(
            "w-18 md:w-28",
            isWhite
              ? "brightness-0 invert opacity-70"
              : "brightness-0 dark:brightness-0 dark:invert opacity-80",
          )}
        />
      </div>
      <div className="flex items-center justify-center opacity-0 animate-logo delay-700 fill-mode-both">
        <Logos.Span
          className={cx(
            "w-18 md:w-20",
            isWhite
              ? "brightness-0 invert opacity-70"
              : "brightness-0 dark:brightness-0 dark:invert opacity-80",
          )}
        />
      </div>
      <div className="hidden sm:flex items-center justify-center opacity-0 animate-logo delay-700 fill-mode-both">
        <Logos.RxVantage
          className={cx(
            "w-22 md:w-32",
            isWhite
              ? "brightness-0 invert opacity-70"
              : "brightness-0 dark:brightness-0 dark:invert opacity-80",
          )}
        />
      </div>
      <div className="flex items-center justify-center opacity-0 animate-logo delay-700 fill-mode-both">
        <Logos.Tcdi
          className={cx(
            "w-11 md:w-14",
            isWhite
              ? "brightness-0 invert opacity-70"
              : "brightness-0 dark:brightness-0 dark:invert opacity-80",
          )}
        />
      </div>
      <div className="flex items-center justify-center opacity-0 animate-logo delay-700 fill-mode-both">
        <Logos.DemandScience
          className={cx(
            "w-32 md:w-40",
            isWhite
              ? "brightness-0 invert opacity-70"
              : "brightness-0 dark:brightness-0 dark:invert opacity-80",
          )}
        />
      </div>
    </div>
  );
}
