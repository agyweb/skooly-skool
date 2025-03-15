import Image from "next/image";
import { LoaderCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("metadata");

  return {
    title: t("auth.title"),
    description: t("auth.description"),
  };
}

export default async function Authlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const t = await getTranslations("footer");

  return (
    <div className="dynamic-height lg:flex">
      <div className="hidden flex-col justify-between border border-transparent bg-muted p-10 lg:flex lg:w-1/2">
        <div className="select-none">
          <Image
            src={"/logo.png"}
            alt="logo"
            className="relative size-[55px]"
            width={55}
            height={55}
            quality={100}
            priority
          />
        </div>
        <div>
          <p className="mb-4 text-[30px] font-medium">
            {t("logo-description")}.
          </p>
          <span className="text-xs font-light">
            <span className="font-geist">&copy;</span>
            {new Date().getFullYear()} {t("rights")}
          </span>
        </div>
      </div>

      <div className="dynamic-height relative flex items-center justify-center py-5 lg:w-1/2">
        <div className="absolute animate-spin">
          <LoaderCircle size={30} />
        </div>

        <div className="relative z-30 bg-white">{children}</div>
      </div>
    </div>
  );
}
