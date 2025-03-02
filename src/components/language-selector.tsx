import React, { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Locale, routing } from "@/i18n/routing";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

export const LanguageSelector = () => {
  const locale: string = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLanguageChange = (currentLocale: string) => {
    router.replace(
      {
        pathname,
        query: Object.fromEntries(searchParams.entries()),
      },
      { locale: currentLocale as Locale, scroll: false }
    );
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`flex items-center gap-2 hover:bg-white ${
            locale === "ar" ? "flex-row-reverse md:ml-0 ml-2" : "md:mr-0 mr-2"
          }`}
        >
          <Globe className="h-4 w-4" />
          <span className="uppercase">{locale}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={`${locale === "ar" ? "start" : "end"}`}>
        {routing.locales.map((currentLocale) => (
          <DropdownMenuItem
            key={currentLocale}
            onClick={() => handleLanguageChange(currentLocale)}
            className="flex items-center gap-2"
          >
            <div className="relative h-4 w-fit">
              <Image
                className="rounded-full"
                src={currentLocale === "en" ? "/flags/gb.svg" : "/flags/ma.svg"}
                alt={currentLocale === "en" ? "English" : "العربية"}
                width={16}
                height={16}
                unoptimized
              />
            </div>
            <span className={`${currentLocale === "ar" && "font-cairo"}`}>
              {currentLocale === "en" ? "English" : "العربية"}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
