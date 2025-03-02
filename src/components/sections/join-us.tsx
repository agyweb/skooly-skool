import { ArrowRight, Rocket } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function JoinUs() {
  const t = useTranslations("joinUs");
  const locale = useLocale();

  return (
    <div
      className="py-[50px] bg-white"
      id="join-us"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="box">
        <div className="text-center space-y-3">
          <div
            className={`h-11 bg-[#3956f51a] mb-5 border border-[#3955f51c] mx-auto px-4 text-[14px] flex items-center gap-x-[6px] w-fit rounded-full shrink-0 text-[#3956f5] ${
              locale === "ar" ? "font-bold" : "font-semibold"
            }`}
          >
            <Rocket
              size={18}
              className={`${locale === "ar" && "rotate-[280deg]"}`}
            />
            {t("join-us")}
          </div>
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p
            className={`text-neutral-500 mx-auto ${
              locale === "ar" ? "max-w-[400px]" : "max-w-[500px]"
            }`}
          >
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row gap-8 gap-y-9 mt-14">
          <div className="rounded-lg p-5 bg-white  flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#0026ff1a] rounded-full grid place-items-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgba(57,86,245,1)"
              >
                <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold leading-none tracking-tight mt-5 ">
              {t("forTeachers.title")}
            </h3>

            <p className="text-neutral-500 text-[15px] mt-3">
              {t("forTeachers.description")}
            </p>

            <button className="bg-primary rounded-md px-4 py-2 text-white mt-5 text-[13px] flex items-center gap-x-2 hover:opacity-95 transition-colors duration-300 group">
              {t("forTeachers.cta")}
              <ArrowRight
                size={14}
                className={`group-hover:transform  transition-transform duration-300 ${
                  locale === "ar" && "rotate-[180deg]"
                }
                ${
                  locale === "ar"
                    ? "group-hover:-translate-x-[3px]"
                    : "group-hover:translate-x-[3px]"
                }
                `}
              />
            </button>
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
                <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold leading-none tracking-tight mt-5 ">
              {t("forStudents.title")}
            </h3>

            <p className="text-neutral-500 text-[15px] mt-3">
              {t("forStudents.description")}
            </p>

            <button className="bg-primary rounded-md px-4 py-2 text-white mt-5 text-[13px] flex items-center gap-x-2 hover:opacity-95 transition-colors duration-300 group">
              {t("forStudents.cta")}
              <ArrowRight
                size={14}
                className={`group-hover:transform  transition-transform duration-300 ${
                  locale === "ar" && "rotate-[180deg]"
                }
                ${
                  locale === "ar"
                    ? "group-hover:-translate-x-[3px]"
                    : "group-hover:translate-x-[3px]"
                }
                `}
              />
            </button>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={20}
                height={20}
                fill="rgba(57,86,245,1)"
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold leading-none tracking-tight mt-5 ">
              {t("forParents.title")}
            </h3>

            <p className="text-neutral-500 text-[15px] mt-3 ">
              {t("forParents.description")}
            </p>

            <button className="bg-primary rounded-md px-4 py-2 text-white mt-5 text-[13px] flex items-center gap-x-2 hover:opacity-95 transition-colors duration-300 group">
              {t("forParents.cta")}
              <ArrowRight
                size={14}
                className={`group-hover:transform  transition-transform duration-300 ${
                  locale === "ar" && "rotate-[180deg]"
                }
                ${
                  locale === "ar"
                    ? "group-hover:-translate-x-[3px]"
                    : "group-hover:translate-x-[3px]"
                }
                `}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
