import { Calendar, MapPin, Search, SquareUser, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PlatformFeatures() {
  const t = useTranslations("platformFeatures");

  return (
    <div
      className="py-[50px] bg-white "
      id="features"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="box">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">{t("title")}</h2>
          <p className="text-neutral-500">{t("subtitle")}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 gap-y-9 mt-16">
          <div className="bg-[#3956f51a] p-6 pt-12 rounded-lg relative flex-1 border border-[#3955f51c]">
            <div className="px-5 py-[6px] bg-primary rounded-full text-white absolute top-0 font-medium tracking-tight text-lg -translate-y-1/2">
              {t("forTeachers.title")}
            </div>
            <div className="space-y-8">
              <CardItem
                title={t("forTeachers.features.feature1.title")}
                description={t("forTeachers.features.feature1.description")}
                iconName="SquareUser"
              />

              <CardItem
                title={t("forTeachers.features.feature2.title")}
                description={t("forTeachers.features.feature2.description")}
                iconName="Calendar"
              />

              <CardItem
                title={t("forTeachers.features.feature3.title")}
                description={t("forTeachers.features.feature3.description")}
                iconName="Team"
              />
            </div>
          </div>

          <div className="bg-[#3956f51a] p-6 pt-12 rounded-lg relative flex-1 border border-[#3955f51c]">
            <div className="px-5 py-[6px] bg-primary rounded-full text-white absolute top-0 font-medium tracking-tight text-lg -translate-y-1/2">
              {t("forStudents.title")}
            </div>
            <div className="space-y-8">
              <CardItem
                title={t("forStudents.features.feature1.title")}
                description={t("forStudents.features.feature1.description")}
                iconName="Search"
              />

              <CardItem
                title={t("forStudents.features.feature2.title")}
                description={t("forStudents.features.feature2.description")}
                iconName="MapPin"
              />

              <CardItem
                title={t("forStudents.features.feature3.title")}
                description={t("forStudents.features.feature3.description")}
                iconName="Users"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardItem({
  title,
  description,
  iconName,
}: {
  title: string;
  description: string;
  iconName: "SquareUser" | "Calendar" | "Team" | "Search" | "MapPin" | "Users";
}) {
  return (
    <div className="flex gap-x-4">
      <div className="size-10 bg-[#3956f51a] rounded-full grid place-items-center shrink-0">
        {iconName === "SquareUser" ? (
          <SquareUser size={16} className="text-[#3956f5]" />
        ) : iconName === "Calendar" ? (
          <Calendar size={16} className="text-[#3956f5]" />
        ) : iconName === "Team" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="rgba(57,86,245,1)"
          >
            <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path>
          </svg>
        ) : iconName === "Search" ? (
          <Search size={16} className="text-[#3956f5]" />
        ) : iconName === "MapPin" ? (
          <MapPin size={16} className="text-[#3956f5]" />
        ) : iconName === "Users" ? (
          <Users size={16} className="text-[#3956f5]" />
        ) : null}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          {title}
        </h3>
        <p className="text-neutral-500 text-[15px]">{description}</p>
      </div>
    </div>
  );
}
