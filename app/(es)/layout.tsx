import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/site";

/** La versión española es la raíz del sitio. */
export const metadata: Metadata = buildMetadata("es");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Debe coincidir con --background de globals.css (DESIGN.md §3).
  themeColor: "#f6f1e7",
};

export default function EsRootLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="es">{children}</RootShell>;
}
