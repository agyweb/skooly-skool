import { Geist, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const initFont =
    locale === "en"
      ? `${geistSans.className} ${cairo.variable}`
      : `${cairo.className} ${geistSans.variable}`;

  return (
    <div
      className={`${initFont} text-secondary antialiased`}
      dir={locale === "ar" ? "rtl" : "ltr"}
      lang={locale}
    >
      <Providers>{children}</Providers>
    </div>
  );
}
