import { useId, useState } from "react";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

import Cookies from "js-cookie";

export default function ChooseModePage() {
  const id = useId();
  const { refresh } = useRouter();
  const t = useTranslations("chooseMode");
  const locale = useLocale();
  const [modeValue, setModeValue] = useState<UserMode>("teacher");

  const handleChooseMode = () => {
    Cookies.set("mode", modeValue);
    refresh();
  };

  return (
    <div className="grid gap-y-8 px-6">
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <RadioGroup
        className="gap-2"
        defaultValue="teacher"
        onValueChange={(e) => setModeValue(e as UserMode)}
      >
        <div
          className={`has-data-[state=checked]:border-ring shadow-xs relative flex w-full items-start gap-2 rounded-md border border-input p-4 outline-none ${locale === "ar" && "flex-row-reverse"}`}
        >
          <RadioGroupItem
            value="teacher"
            id={`${id}-1`}
            aria-describedby={`${id}-1-description`}
            className={`${locale === "ar" ? "order-2" : "order-1"} after:absolute after:inset-0`}
          />
          <div
            className={`flex grow items-center gap-4 ${locale === "ar" && "flex-row-reverse"}`}
          >
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#0026ff1a]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="rgba(57,86,245,1)"
              >
                <path d="m12,12c3.309,0,6-2.691,6-6S15.309,0,12,0s-6,2.691-6,6,2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm9,21c0,.552-.447,1-1,1s-1-.448-1-1c0-3.019-1.925-5.59-4.609-6.57l-1.517,2.276,1.093,3.99c.183.666-.405,1.305-1.201,1.305h-1.532c-.796,0-1.383-.639-1.201-1.305l1.093-3.99-1.517-2.276c-2.684.98-4.609,3.551-4.609,6.571,0,.552-.448,1-1,1s-1-.448-1-1c0-4.962,4.038-9,9-9s9,4.038,9,9Z" />
              </svg>
            </div>

            <div
              className={`grid grow gap-2 ${locale === "ar" && "justify-items-end text-right"}`}
            >
              <Label htmlFor={`${id}-1`}>{t("forTeachers.title")}</Label>
              <p
                id={`${id}-1-description`}
                className="text-xs text-muted-foreground"
              >
                {t("forTeachers.description")}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`has-data-[state=checked]:border-ring shadow-xs relative flex w-full items-start gap-2 rounded-md border border-input p-4 outline-none ${locale === "ar" && "flex-row-reverse"}`}
        >
          <RadioGroupItem
            value="student"
            id={`${id}-2`}
            aria-describedby={`${id}-2-description`}
            className={`${locale === "ar" ? "order-2" : "order-1"} after:absolute after:inset-0`}
          />
          <div
            className={`flex grow items-start gap-4 ${locale === "ar" && "flex-row-reverse"}`}
          >
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#3956f51a]">
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

            <div
              className={`grid grow gap-2 ${locale === "ar" && "justify-items-end text-right"}`}
            >
              <Label htmlFor={`${id}-2`}>{t("forStudents.title")}</Label>
              <p
                id={`${id}-2-description`}
                className="text-xs text-muted-foreground"
              >
                {t("forStudents.description")}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`has-data-[state=checked]:border-ring shadow-xs relative flex w-full items-start gap-2 rounded-md border border-input p-4 outline-none ${locale === "ar" && "flex-row-reverse"}`}
        >
          <RadioGroupItem
            value="parent"
            id={`${id}-3`}
            aria-describedby={`${id}-3-description`}
            className={`${locale === "ar" ? "order-2" : "order-1"} after:absolute after:inset-0`}
          />
          <div
            className={`flex grow items-start gap-4 ${locale === "ar" && "flex-row-reverse"}`}
          >
            <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#3956f51a]">
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

            <div
              className={`grid grow gap-2 ${locale === "ar" && "justify-items-end text-right"}`}
            >
              <Label htmlFor={`${id}-3`}>{t("forParents.title")}</Label>
              <p
                id={`${id}-3-description`}
                className="text-xs text-muted-foreground"
              >
                {t("forParents.description")}
              </p>
            </div>
          </div>
        </div>
      </RadioGroup>

      <Button className="w-full" size="lg" onClick={handleChooseMode}>
        {t("CTA")}
      </Button>
    </div>
  );
}
