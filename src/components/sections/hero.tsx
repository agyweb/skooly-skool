"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    [locale]
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
    <div className="relative overflow-hidden w-full hero-height">
      <div className="absolute inset-0 -z-10">
        <Image className="object-cover" src={"/hero-bg.png"} fill alt="" />
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="hero-page flex gap-8 py-40 items-center justify-center flex-col md:px-0 px-5">
          <div className="relative overflow-hidden">
            <Link href="#features" className="navLink">
              <Button
                variant="outline"
                size="sm"
                className="gap-4 bg-white border-neutral-100 sm:text-sm text-xs"
              >
                {t("discoverBtn")}{" "}
                {locale === "en" ? (
                  <MoveRight className="w-4 h-4" />
                ) : (
                  <MoveLeft className="w-4 h-4" />
                )}
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tighter font-normal text-center">
              <span className="text-spektr-cyan-50">{t("title")} </span>
              <span
                className={`relative overflow-hidden flex w-full justify-center text-center ${
                  locale === "en"
                    ? "min-h-[52px] md:min-h-[66px] lg:min-h-[78px] md:pt-1"
                    : "min-h-[68px] md:min-h-[90px] lg:min-h-[120px] pt-2 md:pt-4"
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

            <p className="text-base md:text-lg lg:text-xl leading-relaxed tracking-tight text-neutral-800 max-w-[41rem] mt-2 mx-auto font-normal text-center">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex flex-row justify-center items-center gap-3 flex-wrap">
            <Button size="lg" className="gap-3 border-primary">
              {t("teacherBtn")}{" "}
              <span className="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5Z"></path>
                </svg>
              </span>
            </Button>

            <Button
              size="lg"
              className="gap-3 bg-white border-neutral-100"
              variant="outline"
            >
              {t("studentBtn")}{" "}
              <span className="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path>
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
