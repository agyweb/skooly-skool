"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LanguageSelector } from "./language-selector";

import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const locale: string = useLocale();
  const t = useTranslations("navigation");

  const navigationItems = useMemo(
    () => [
      {
        title: t("links.features"),
        href: "#features",
      },
      {
        title: t("links.education"),
        href: "#education",
      },
      {
        title: t("links.benefits"),
        href: "#benefits",
      },
      {
        title: t("links.community"),
        href: "#community",
      },
    ],
    [t]
  );

  // Update the state when scrolling
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`w-full z-40 fixed top-0 left-0 transition-all duration-300 ${
        hasScrolled
          ? "[box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)] bg-white"
          : ""
      }`}
    >
      <div className="box relative mx-auto min-h-20 flex md:gap-4 gap-2 flex-row xl:grid xl:grid-cols-3 items-center">
        {/* Header Logo */}
        <div className="relative overflow-hidden flex justify-start min-w-16">
          <Image src="/logo.png" width={55} height={55} alt=""></Image>
        </div>

        {/* Header Navigation */}
        <div
          className={`justify-center items-center gap-4 xl:flex hidden flex-row ${
            locale === "en" ? "mr-16" : "ml-16"
          }`}
        >
          <div className="flex justify-center items-center">
            <div className="flex justify-center gap-4 flex-row">
              {navigationItems.map((item, i) => (
                <Link key={i} href={item.href}>
                  <Button className="text-secondary" variant="link">
                    {item.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Header Call To Actions */}
        <div className="flex justify-end w-full gap-4">
          <LanguageSelector />

          <div className="border-r border-secondary/60 md:inline hidden"></div>

          <Button
            className="md:inline-block hidden border border-primary"
            asChild
          >
            <Link href="#join-us">{t("cta.joinUs")}</Link>
          </Button>

          <Button
            className="md:inline-block hidden bg-white border-neutral-100"
            variant="outline"
          >
            {t("cta.signIn")}
          </Button>
        </div>

        {/* Header Mobile Menu */}
        <div className="flex w-12 shrink xl:hidden items-end justify-end">
          <Sheet open={isOpen} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="bg-white border-neutral-100">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              hideClose
              side={`${locale === "ar" ? "left" : "right"}`}
              className="w-full sm:max-w-sm p-0 bg-zinc-900 border-none outline-none"
              aria-label="Navigation Menu"
              aria-describedby=""
            >
              <SheetTitle className="sr-only"></SheetTitle>

              <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Image src="/logo.png" width={55} height={55} alt=""></Image>
                </div>

                <SheetClose asChild>
                  <Button variant="link" size="icon" className="text-white">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>

              <div
                className="flex flex-col justify-between p-4 text-center"
                style={{ height: "calc(100% - 88px)" }}
              >
                <nav className="space-y-4 text-white">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block text-xl font-normal py-4"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-3">
                  <Button variant="default" className="w-full">
                    {t("cta.joinUs")}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full bg-white border-neutral-100"
                  >
                    {t("cta.signIn")}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};
