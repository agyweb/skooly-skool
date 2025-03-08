import Image from "next/image";
import { ClerkLoading } from "@clerk/nextjs";
import type { Metadata } from "next";
import { LoaderCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Skooly Skool | Authentication",
  description: "Continue to Skooly Skool by signing in or creating an account.",
};

export default async function Authlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const t = await getTranslations("footer");

  return (
    <div className="min-h-svh lg:flex">
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

      <div className="flex min-h-svh items-center justify-center py-5 lg:w-1/2">
        <ClerkLoading>
          <div className="animate-spin">
            <LoaderCircle size={30} />
          </div>
        </ClerkLoading>

        {children}
      </div>
    </div>
  );
}
