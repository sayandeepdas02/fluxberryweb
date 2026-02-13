import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Fluxberry AI Website Terms of Use — the legally binding terms and conditions that govern your use of fluxberry.ai.",
  alternates: { canonical: "/legal/terms" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
