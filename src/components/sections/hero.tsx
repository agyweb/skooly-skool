"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Cookies from "js-cookie";

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

  const createModeCookie = (mode: UserMode) => {
    Cookies.set("mode", mode, { expires: 30 });
  };

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
            <Link href="/sign-up" onClick={() => createModeCookie("teacher")}>
              <Button size="lg" className="gap-3 border-primary">
                {t("teacherBtn")}{" "}
                <span className="h-4 w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m12,12c3.309,0,6-2.691,6-6S15.309,0,12,0s-6,2.691-6,6,2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm9,21c0,.552-.447,1-1,1s-1-.448-1-1c0-3.019-1.925-5.59-4.609-6.57l-1.517,2.276,1.093,3.99c.183.666-.405,1.305-1.201,1.305h-1.532c-.796,0-1.383-.639-1.201-1.305l1.093-3.99-1.517-2.276c-2.684.98-4.609,3.551-4.609,6.571,0,.552-.448,1-1,1s-1-.448-1-1c0-4.962,4.038-9,9-9s9,4.038,9,9Z" />
                  </svg>
                </span>
              </Button>
            </Link>

            <Link href="/sign-up" onClick={() => createModeCookie("student")}>
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
                    <path d="m21.943,4.5L13.722.39c-1.048-.521-2.4-.521-3.446.002L2.057,4.5l3.943,1.971v2.529c0,3.309,2.691,6,6,6s6-2.691,6-6v-2.529l2-1v6.529h2v-7.5h-.057Zm-10.773-2.319c.481-.239,1.18-.24,1.66,0l4.641,2.32-4.642,2.319c-.479.24-1.177.24-1.658,0l-4.641-2.319,4.639-2.319Zm4.831,6.819c0,2.206-1.794,4-4,4s-4-1.794-4-4v-1.529l2.276,1.138c.524.262,1.125.393,1.725.393s1.2-.131,1.723-.393l2.276-1.138v1.529Zm4,11.5v3.5h-2v-3.5c0-1.276-.961-2.333-2.199-2.481l-3.787,4.543-3.79-4.547c-1.25.138-2.225,1.2-2.225,2.485v3.5h-2v-3.5c0-2.481,2.019-4.5,4.5-4.5h.648l2.866,3.438,2.865-3.438h.62c2.481,0,4.5,2.019,4.5,4.5Z" />
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
