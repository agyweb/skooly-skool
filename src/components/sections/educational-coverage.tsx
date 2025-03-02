import { BookOpenText, GraduationCap, School, Shapes } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function EducationalCoverage() {
  const t = useTranslations("educationalCoverage");
  const local = useLocale();

  return (
    <div
      className="py-[50px] bg-[#f9fafb]"
      id="education"
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
              <BookOpenText size={18} className="text-[#3956f5]" />
            </div>
            <div className=" border-b border-neutral-200 pb-5 mt-5 ">
              <h3 className="text-xl font-semibold leading-none tracking-tight ">
                {t("levels.primary.title")}
              </h3>
              <div className="text-white text-center w-fit text-[11px] mt-3 leading-none font-normal rounded-sm px-2 bg-primary py-[5px] ">
                {t("levels.primary.grades")}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-neutral-500 text-sm">
                {t("levels.primary.subjects.subject1")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.primary.subjects.subject2")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.primary.subjects.subject3")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.primary.subjects.subject4")}
              </p>

              <p className="text-primary text-sm">
                <span
                  className={`italic ${
                    local === "en" ? "font-meduim" : "font-semibold"
                  }`}
                >
                  {t("levels.primary.additional")}
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <School size={18} className="text-[#3956f5]" />
            </div>
            <div className=" border-b border-neutral-200 pb-5 mt-5 ">
              <h3 className="text-xl font-semibold leading-none tracking-tight ">
                {t("levels.middle.title")}
              </h3>
              <div className="text-white w-fit text-center text-[11px] mt-3 leading-none font-normal rounded-sm px-2 bg-primary py-[5px] ">
                {t("levels.middle.grades")}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-neutral-500 text-sm">
                {t("levels.middle.subjects.subject1")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.middle.subjects.subject2")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.middle.subjects.subject3")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.middle.subjects.subject4")}
              </p>

              <p className="text-primary text-sm">
                <span
                  className={`italic ${
                    local === "en" ? "font-meduim" : "font-semibold"
                  }`}
                >
                  {t("levels.middle.additional")}
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <GraduationCap size={20} className="text-[#3956f5]" />
            </div>
            <div className=" border-b border-neutral-200 pb-5 mt-5 ">
              <h3 className="text-xl font-semibold leading-none tracking-tight ">
                {t("levels.high.title")}
              </h3>
              <div className="text-white w-fit text-center text-[11px] mt-3 leading-none font-normal rounded-sm bg-primary px-2 py-[5px] ">
                {t("levels.high.grades")}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-neutral-500 text-sm">
                {t("levels.high.subjects.subject1")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.high.subjects.subject2")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.high.subjects.subject3")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.high.subjects.subject4")}
              </p>

              <p className="text-primary text-sm">
                <span
                  className={`italic ${
                    local === "en" ? "font-meduim" : "font-semibold"
                  }`}
                >
                  {t("levels.high.additional")}
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-lg p-5 bg-white flex-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
            <div className="size-12 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
              <Shapes size={18} className="text-[#3956f5]" />
            </div>

            <div className=" border-b border-neutral-200 pb-5 mt-5 ">
              <h3 className="text-xl font-semibold leading-none tracking-tight ">
                {t("levels.additional.title")}
              </h3>
              <div className="text-white w-fit text-center text-[11px] mt-3 leading-none font-normal rounded-sm bg-primary px-2 py-[5px] ">
                {t("levels.additional.grades")}
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <p className="text-neutral-500 text-sm">
                {t("levels.additional.subjects.subject1")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.additional.subjects.subject2")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.additional.subjects.subject3")}
              </p>

              <p className="text-neutral-500 text-sm">
                {t("levels.additional.subjects.subject4")}
              </p>

              <p className="text-primary text-sm">
                <span
                  className={`italic ${
                    local === "en" ? "font-meduim" : "font-semibold"
                  }`}
                >
                  {t("levels.additional.additional")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
