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
import { useNav } from "@/store/nav-menu-slice";
import { useLenisStore } from "@/store/lenis-slice";

export const Header = () => {
  // const [isOpen, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const locale: string = useLocale();
  const { lenis } = useLenisStore();
  const { isOpen, toggle } = useNav((state) => state);

  const t = useTranslations("navigation");

  useEffect(() => {
    if (isOpen && lenis) {
      lenis.stop();
    } else if (!isOpen && lenis) {
      lenis.start();
    }
  }, [isOpen, lenis]);

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
    [t],
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
      className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
        hasScrolled
          ? "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]"
          : ""
      }`}
    >
      <div className="box relative mx-auto flex min-h-20 flex-row items-center gap-2 md:gap-4 xl:grid xl:grid-cols-3">
        {/* Header Logo */}
        <div className="relative flex min-w-16 justify-start overflow-hidden">
          <Image
            className="logo cursor-pointer"
            src="/logo.png"
            width={55}
            height={55}
            alt=""
          ></Image>
        </div>

        {/* Header Navigation */}
        <div
          className={`hidden flex-row items-center justify-center gap-4 xl:flex ${
            locale === "en" ? "mr-16" : "ml-16"
          }`}
        >
          <div className="flex items-center justify-center">
            <div className="flex flex-row justify-center gap-4">
              {navigationItems.map((item, i) => (
                <Link key={i} href={item.href} className="navLink">
                  <Button className="text-secondary" variant="link">
                    {item.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Header Call To Actions */}
        <div className="flex w-full justify-end gap-4">
          <LanguageSelector />

          <div className="hidden border-r border-secondary/60 md:inline"></div>

          <Button
            className="navLink hidden border border-primary md:inline-block"
            asChild
          >
            <Link href="#join-us">{t("cta.joinUs")}</Link>
          </Button>

          <Link href="/sign-in">
            <Button
              className="hidden border-neutral-100 bg-white md:inline-block"
              variant="outline"
            >
              {t("cta.signIn")}
            </Button>
          </Link>
        </div>

        {/* Header Mobile Menu */}
        <div className="flex w-12 shrink items-end justify-end xl:hidden">
          <Sheet open={isOpen} onOpenChange={toggle}>
            <SheetTrigger asChild>
              <Button variant="outline" className="border-neutral-100 bg-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              hideClose
              side={`${locale === "ar" ? "left" : "right"}`}
              className="w-full border-none bg-zinc-900 p-0 outline-none sm:max-w-sm"
              aria-label="Navigation Menu"
              aria-describedby=""
            >
              <SheetTitle className="sr-only"></SheetTitle>

              <div className="flex items-center justify-between border-b border-zinc-800 p-4">
                <div className="flex items-center gap-2">
                  <Link href="/" className="navLink" onClick={toggle}>
                    <Image
                      className="logo cursor-pointer"
                      src="/logo.png"
                      width={55}
                      height={55}
                      alt=""
                    ></Image>
                  </Link>
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
                      className="navLink block py-4 text-xl font-normal"
                      onClick={() => toggle()}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>

                <div className="space-y-3">
                  <Link
                    href="#join-us"
                    className="navLink inline-block w-full"
                    onClick={toggle}
                  >
                    <Button variant="default" className="w-full">
                      {t("cta.joinUs")}
                    </Button>
                  </Link>

                  <Link href="/sign-in" className="inline-block w-full">
                    <Button
                      variant="outline"
                      className="w-full border-neutral-100 bg-white text-secondary hover:text-secondary"
                    >
                      {t("cta.signIn")}
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};
