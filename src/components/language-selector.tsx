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

export const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState("EN");

  const languages = [
    { code: "EN", name: "English", flag: "/flags/gb.svg" },
    { code: "AR", name: "Arabic", flag: "/flags/ma.svg" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    // Here you would add logic to actually change the language
    // throughout your application
  };

  // Find the current language object
  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-white md:mr-0 mr-2"
        >
          <Globe className="h-4 w-4" />
          <span>{currentLanguage?.code}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center gap-2"
          >
            <div className="relative h-4 w-fit">
              <Image
                className="rounded-full"
                src={lang.flag}
                alt={`${lang.name} flag`}
                width={16}
                height={16}
                unoptimized
              />
            </div>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
