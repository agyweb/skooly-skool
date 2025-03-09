"use client";

import { ClerkProvider as ImportedClerkProvider } from "@clerk/nextjs";
import { arSA, enUS } from "@clerk/localizations";
import { useLocale } from "next-intl";

export default function ClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <ImportedClerkProvider localization={locale === "ar" ? arSA : enUS}>
      {children}
    </ImportedClerkProvider>
  );
}
