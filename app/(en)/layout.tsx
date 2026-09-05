import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/site";

/** Versión inglesa: layout raíz propio para tener <html lang="en">. */
export const metadata: Metadata = buildMetadata("en");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Debe coincidir con --background de globals.css (DESIGN.md §3).
  themeColor: "#f6f1e7",
};

export default function EnRootLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
