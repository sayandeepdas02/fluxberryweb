import type { SVGProps } from "react";

export const DatabaseLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 200 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text
      x="0"
      y="30"
      fill="currentColor"
      fontFamily="system-ui, sans-serif"
      fontSize="24"
      fontWeight="bold"
      letterSpacing="-0.02em"
    >
      Fluxberry AI
    </text>
  </svg>
);
