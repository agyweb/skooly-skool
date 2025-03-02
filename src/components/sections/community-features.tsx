import { MessageSquareMore, SquareArrowOutUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CommunityFeatures() {
  const t = useTranslations("communityFeatures");
  return (
    <div
      className="py-[50px] bg-[#f9fafb]"
      id="community"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="box">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p className="text-neutral-500">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:flex-row gap-8 gap-y-9 mt-14 ">
          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="rgba(57,86,245,1)"
              >
                <path d="M5 8V20H19V8H5ZM5 6H19V4H5V6ZM20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 10H11V14H7V10ZM7 16H17V18H7V16ZM13 11H17V13H13V11Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold leading-none tracking-tight mt-5 ">
              {t("features.feature1.title")}
            </h3>

            <p className="text-neutral-500 text-[15px] mt-3">
              {t("features.feature1.description")}
            </p>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgba(57,86,245,1)"
              >
                <path d="M9.55 11.5C8.30736 11.5 7.3 10.4926 7.3 9.25C7.3 8.00736 8.30736 7 9.55 7C10.7926 7 11.8 8.00736 11.8 9.25C11.8 10.4926 10.7926 11.5 9.55 11.5ZM10 19.748V16.4C10 15.9116 10.1442 15.4627 10.4041 15.0624C10.1087 15.0213 9.80681 15 9.5 15C7.93201 15 6.49369 15.5552 5.37091 16.4797C6.44909 18.0721 8.08593 19.2553 10 19.748ZM4.45286 14.66C5.86432 13.6168 7.61013 13 9.5 13C10.5435 13 11.5431 13.188 12.4667 13.5321C13.3447 13.1888 14.3924 13 15.5 13C17.1597 13 18.6849 13.4239 19.706 14.1563C19.8976 13.4703 20 12.7471 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 12.9325 4.15956 13.8278 4.45286 14.66ZM18.8794 16.0859C18.4862 15.5526 17.1708 15 15.5 15C13.4939 15 12 15.7967 12 16.4V20C14.9255 20 17.4843 18.4296 18.8794 16.0859ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM15.5 12.5C14.3954 12.5 13.5 11.6046 13.5 10.5C13.5 9.39543 14.3954 8.5 15.5 8.5C16.6046 8.5 17.5 9.39543 17.5 10.5C17.5 11.6046 16.6046 12.5 15.5 12.5Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold leading-none tracking-tight mt-5 ">
              {t("features.feature2.title")}
            </h3>

            <p className="text-neutral-500 text-[15px] mt-3">
              {t("features.feature2.description")}
            </p>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <SquareArrowOutUpRight size={18} className="text-[#3956f5]" />
            </div>
            <h3 className="text-xl font-semibold leading-none tracking-tight mt-5 ">
              {t("features.feature3.title")}
            </h3>

            <p className="text-neutral-500 text-[15px] mt-3">
              {t("features.feature3.description")}
            </p>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <MessageSquareMore size={18} className="text-[#3956f5]" />
            </div>
            <h3 className="text-xl font-semibold leading-none tracking-tight mt-5 ">
              {t("features.feature4.title")}
            </h3>

            <p className="text-neutral-500 text-[15px] mt-3 ">
              {t("features.feature4.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
