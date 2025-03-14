import { useRouter } from "next/navigation";
import { Dispatch, useEffect, useId } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useLocale, useTranslations } from "next-intl";
import Cookies from "js-cookie";

type Props = {
  setShowChooseMode: Dispatch<React.SetStateAction<boolean>>;
};

export default function ChooseModePage({ setShowChooseMode }: Props) {
  const id = useId();
  const { refresh } = useRouter();
  const t = useTranslations("chooseMode");
  const locale = useLocale();

  useEffect(() => {
    // Cookies.set("mode", "student");
    // refresh();
  }, [refresh]);

  return (
    <div className="grid gap-y-8">
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <RadioGroup className="gap-2" defaultValue="1">
        <div
          className={`has-data-[state=checked]:border-ring shadow-xs relative flex w-full items-start gap-2 rounded-md border border-input p-4 outline-none ${locale === "ar" && "flex-row-reverse"}`}
        >
          <RadioGroupItem
            value="1"
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
                <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5Z"></path>
              </svg>
            </div>

            <div
              className={`grid grow gap-2 ${locale === "ar" && "justify-items-end"}`}
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
            value="2"
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
                <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path>
              </svg>
            </div>

            <div
              className={`grid grow gap-2 ${locale === "ar" && "justify-items-end"}`}
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
            value="3"
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
                width={20}
                height={20}
                fill="rgba(57,86,245,1)"
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
              </svg>
            </div>

            <div
              className={`grid grow gap-2 ${locale === "ar" && "justify-items-end"}`}
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
    </div>
  );
}
