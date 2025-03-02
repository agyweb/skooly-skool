import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#f9fafb]  py-12 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="  mb-4 block">
              <Image src="/logo.png" width={55} height={55} alt=""></Image>
            </span>
            <p className="text-neutral-500 text-[13px]">
              {t("logo-description")}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-tight">
              {t("quick-links.title")}
            </h4>
            <ul className="space-y-2 text-neutral-500">
              <li>
                <Link
                  href="#features"
                  className="hover:text-primary transition-colors text-[13px]"
                >
                  {t("quick-links.links.features")}
                </Link>
              </li>
              <li>
                <Link
                  href="#education"
                  className="hover:text-primary transition-colors text-[13px]"
                >
                  {t("quick-links.links.education")}
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="hover:text-primary transition-colors text-[13px]"
                >
                  {t("quick-links.links.benefits")}
                </Link>
              </li>
              <li>
                <Link
                  href="#community"
                  className="hover:text-primary transition-colors text-[13px]"
                >
                  {t("quick-links.links.community")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-tight">
              {t("contact.title")}
            </h4>
            <ul className="space-y-2 text-neutral-500">
              <li className="flex items-center text-[13px] gap-x-[6px] transition-colors hover:text-primary cursor-pointer">
                <Mail size={13} />
                <span>contact@skoolyskool.ma</span>
              </li>
              <li className="flex items-center text-[13px] gap-x-[6px] transition-colors hover:text-primary cursor-pointer">
                <Phone size={13} />
                <span>+212 5XX-XXXXXX</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-tight">
              {t("follow-us.title")}
            </h4>
            <div className="flex gap-4">
              <div className="size-10 bg-[#3956f51a] rounded-full grid place-items-center shrink-0 cursor-pointer border border-[#3955f51c]">
                <Facebook size={18} className="text-[#3956f5]" />
              </div>
              <div className="size-10 bg-[#3956f51a] rounded-full grid place-items-center shrink-0 cursor-pointer border border-[#3955f51c]">
                <Instagram size={18} className="text-[#3956f5]" />
              </div>
              <div className="size-10 bg-[#3956f51a] rounded-full grid place-items-center shrink-0 cursor-pointer border border-[#3955f51c]">
                <Linkedin size={18} className="text-[#3956f5]" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-500 text-[13px]">
          <p>
            <span className="font-geist">&copy;</span>
            {new Date().getFullYear()} {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
