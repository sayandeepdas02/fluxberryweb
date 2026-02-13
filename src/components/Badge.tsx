import React from "react";
import { cx } from "@/lib/utils";

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> { }

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={cx(
          "z-10 block w-fit rounded-lg border border-blue-200/20 bg-blue-50/50 px-3 py-1.5 text-xs font-semibold uppercase leading-4 tracking-tighter sm:text-sm",
          className,
        )}
        {...props}
      >
        <span className="bg-gradient-to-b from-blue-600 to-blue-700 bg-clip-text text-transparent">
          {children}
        </span>
      </span>
    );
  },
);

Badge.displayName = "Badge";

export { Badge, type BadgeProps };
