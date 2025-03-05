"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, MoveLeft } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const locale = useLocale();
  const titles = useMemo(
    () =>
      locale === "en"
        ? ["Connect", "Engage", "Collaborate"]
        : ["يتواصلون", "ينخرطون", "يتعاونون"],
    [locale],
  );

  const t = useTranslations("hero");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="hero-height relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image className="object-cover" src={"/hero-bg.png"} fill alt="" />
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      <div className="container mx-auto flex h-full items-center justify-center">
        <div className="hero-page flex flex-col items-center justify-center gap-8 px-5 py-40 md:px-0">
          <div className="relative overflow-hidden">
            <Link href="#features" className="navLink">
              <Button
                variant="outline"
                size="sm"
                className="gap-4 border-neutral-100 bg-white text-xs sm:text-sm"
              >
                {t("discoverBtn")}{" "}
                {locale === "en" ? (
                  <MoveRight className="h-4 w-4" />
                ) : (
                  <MoveLeft className="h-4 w-4" />
                )}
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="mx-auto max-w-4xl text-center text-5xl font-normal tracking-tighter md:text-6xl lg:text-7xl">
              <span className="text-spektr-cyan-50">{t("title")} </span>
              <span
                className={`relative flex w-full justify-center overflow-hidden text-center ${
                  locale === "en"
                    ? "min-h-[52px] md:min-h-[66px] md:pt-1 lg:min-h-[78px]"
                    : "min-h-[68px] pt-2 md:min-h-[90px] md:pt-4 lg:min-h-[120px]"
                }`}
              >
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[41rem] text-center text-base font-normal leading-relaxed tracking-tight text-neutral-800 md:text-lg lg:text-xl">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <Link href="/sign-up?mode=teacher">
              <Button size="lg" className="gap-3 border-primary">
                {t("teacherBtn")}{" "}
                <span className="h-4 w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5Z"></path>
                  </svg>
                </span>
              </Button>
            </Link>

            <Link href="/sign-up?mode=student">
              <Button
                size="lg"
                className="gap-3 border-neutral-100 bg-white"
                variant="outline"
              >
                {t("studentBtn")}{" "}
                <span className="h-4 w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path>
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
