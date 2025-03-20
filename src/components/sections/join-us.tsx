"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, Rocket } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Cookies from "js-cookie";

export default function JoinUs() {
  const t = useTranslations("joinUs");
  const locale = useLocale();

  const createModeCookie = (mode: UserMode) => {
    Cookies.set("mode", mode, { expires: 30 });
  };

  return (
    <div
      className="bg-white py-[50px]"
      id="join-us"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="box">
        <div className="space-y-3 text-center">
          <div
            className={`mx-auto mb-5 flex h-11 w-fit shrink-0 items-center gap-x-[6px] rounded-full border border-[#3955f51c] bg-[#3956f51a] px-4 text-[14px] text-[#3956f5] ${
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
            className={`mx-auto text-neutral-500 ${
              locale === "ar" ? "max-w-[400px]" : "max-w-[500px]"
            }`}
          >
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 gap-y-9 md:grid-cols-3 md:flex-row">
          <div className="flex-1 rounded-lg bg-white p-5 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#0026ff1a]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="21"
                height="21"
                fill="rgba(57,86,245,1)"
              >
                <path d="m12,12c3.309,0,6-2.691,6-6S15.309,0,12,0s-6,2.691-6,6,2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm9,21c0,.552-.447,1-1,1s-1-.448-1-1c0-3.019-1.925-5.59-4.609-6.57l-1.517,2.276,1.093,3.99c.183.666-.405,1.305-1.201,1.305h-1.532c-.796,0-1.383-.639-1.201-1.305l1.093-3.99-1.517-2.276c-2.684.98-4.609,3.551-4.609,6.571,0,.552-.448,1-1,1s-1-.448-1-1c0-4.962,4.038-9,9-9s9,4.038,9,9Z" />
              </svg>
            </div>
            <h3 className="mt-5 text-xl font-semibold leading-none tracking-tight">
              {t("forTeachers.title")}
            </h3>

            <p className="mt-3 text-[15px] text-neutral-500">
              {t("forTeachers.description")}
            </p>

            <Link href="/sign-up" onClick={() => createModeCookie("teacher")}>
              <button className="group mt-5 flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-[13px] text-white transition-colors duration-300 hover:opacity-95">
                {t("forTeachers.cta")}
                <ArrowRight
                  size={14}
                  className={`transition-transform duration-300 group-hover:transform ${
                    locale === "ar" && "rotate-[180deg]"
                  } ${
                    locale === "ar"
                      ? "group-hover:-translate-x-[3px]"
                      : "group-hover:translate-x-[3px]"
                  } `}
                />
              </button>
            </Link>
          </div>

          <div className="flex-1 rounded-lg bg-white p-5 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#3956f51a]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgba(57,86,245,1)"
              >
                <path d="m21.943,4.5L13.722.39c-1.048-.521-2.4-.521-3.446.002L2.057,4.5l3.943,1.971v2.529c0,3.309,2.691,6,6,6s6-2.691,6-6v-2.529l2-1v6.529h2v-7.5h-.057Zm-10.773-2.319c.481-.239,1.18-.24,1.66,0l4.641,2.32-4.642,2.319c-.479.24-1.177.24-1.658,0l-4.641-2.319,4.639-2.319Zm4.831,6.819c0,2.206-1.794,4-4,4s-4-1.794-4-4v-1.529l2.276,1.138c.524.262,1.125.393,1.725.393s1.2-.131,1.723-.393l2.276-1.138v1.529Zm4,11.5v3.5h-2v-3.5c0-1.276-.961-2.333-2.199-2.481l-3.787,4.543-3.79-4.547c-1.25.138-2.225,1.2-2.225,2.485v3.5h-2v-3.5c0-2.481,2.019-4.5,4.5-4.5h.648l2.866,3.438,2.865-3.438h.62c2.481,0,4.5,2.019,4.5,4.5Z" />
              </svg>
            </div>
            <h3 className="mt-5 text-xl font-semibold leading-none tracking-tight">
              {t("forStudents.title")}
            </h3>

            <p className="mt-3 text-[15px] text-neutral-500">
              {t("forStudents.description")}
            </p>

            <Link href="/sign-up" onClick={() => createModeCookie("student")}>
              <button className="group mt-5 flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-[13px] text-white transition-colors duration-300 hover:opacity-95">
                {t("forStudents.cta")}
                <ArrowRight
                  size={14}
                  className={`transition-transform duration-300 group-hover:transform ${
                    locale === "ar" && "rotate-[180deg]"
                  } ${
                    locale === "ar"
                      ? "group-hover:-translate-x-[3px]"
                      : "group-hover:translate-x-[3px]"
                  } `}
                />
              </button>
            </Link>
          </div>

          <div className="flex-1 rounded-lg bg-white p-5 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#3956f51a]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgba(57,86,245,1)"
              >
                <path d="m7.752,17.084c.364.415.323,1.047-.093,1.411-.414.364-1.046.323-1.411-.093l-2.043-2.33c-.083-.095-.23-.125-.308-.063-1.138.893-1.897,1.913-1.897,3.991v3c0,.552-.448,1-1,1s-1-.448-1-1v-3c0-3.082,1.423-4.593,2.664-5.565.92-.72,2.256-.579,3.045.319l2.043,2.331Zm-3.613-10.093h0c.014,0,.027,0,0,0Zm17.168,7.421c-.926-.719-2.264-.568-3.047.34l-1.266,1.468-1.285-1.466c-.789-.898-2.125-1.039-3.045-.319-1.24.972-2.664,2.483-2.664,5.565v3c0,.552.448,1,1,1s1-.448,1-1v-3c0-2.078.759-3.098,1.897-3.991.078-.061.224-.031.308.063l2.043,2.33c.19.217.464.341.752.341h.004c.29,0,.564-.127.753-.347l2.017-2.338c.082-.095.228-.128.308-.066.997.773,1.918,1.793,1.918,4.007v3c0,.552.448,1,1,1s1-.448,1-1v-3c0-3.102-1.439-4.615-2.693-5.587Zm-11.327-3.711c.11.541-.24,1.069-.782,1.178-.393.08-.796.12-1.198.12-2.17,0-4.069-1.162-5.123-2.892-.309,1.397-.64,2.907-.9,4.104-.102.468-.516.788-.976.788-.07,0-.142-.007-.213-.023-.54-.117-.882-.65-.765-1.189.282-1.299,1.701-7.807,1.876-8.351C2.758,1.783,5.209,0,8,0c1.75,0,3.391.718,4.587,1.949,1.097-1.194,2.667-1.949,4.413-1.949,3.309,0,6,2.691,6,6s-2.691,6-6,6-6-2.691-6-6c0-.818.166-1.597.463-2.308-.273-.347-.587-.652-.941-.899-.528,1.312-1.447,2.424-2.67,3.187-1.081.674-2.469,1.011-3.713,1.011-.028,0-.014,0,0,0,.444,1.724,1.999,3.008,3.86,3.008.269,0,.539-.027.802-.08.539-.111,1.069.24,1.178.782Zm3.02-4.702c0,2.206,1.794,4,4,4s4-1.794,4-4-1.794-4-4-4-4,1.794-4,4Zm-9.158-1.042c1.031.102,2.059-.118,2.952-.675.855-.533,1.491-1.313,1.862-2.228-.216-.032-.434-.054-.656-.054-1.886,0-3.54,1.187-4.158,2.958Z" />
              </svg>
            </div>
            <h3 className="mt-5 text-xl font-semibold leading-none tracking-tight">
              {t("forParents.title")}
            </h3>

            <p className="mt-3 text-[15px] text-neutral-500">
              {t("forParents.description")}
            </p>

            <Link href="/sign-up" onClick={() => createModeCookie("parent")}>
              <button className="group mt-5 flex items-center gap-x-2 rounded-md bg-primary px-4 py-2 text-[13px] text-white transition-colors duration-300 hover:opacity-95">
                {t("forParents.cta")}
                <ArrowRight
                  size={14}
                  className={`transition-transform duration-300 group-hover:transform ${
                    locale === "ar" && "rotate-[180deg]"
                  } ${
                    locale === "ar"
                      ? "group-hover:-translate-x-[3px]"
                      : "group-hover:translate-x-[3px]"
                  } `}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
