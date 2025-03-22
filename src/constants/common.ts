export const userModes: UserMode[] = ["teacher", "student", "parent"];

export const languages: LabeledValue<Language> = [
  { label: "English", value: "en" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
];

export const languagesEnums = languages.map((language) => language.value) as [
  Language,
  ...Language[],
];

export const genders: LabeledValue<Gender> = [
  { label: "Male", value: "male" },
  {
    label: "Female",
    value: "female",
  },
];

export const gendersEnums = genders.map((gender) => gender.value) as [
  Gender,
  ...Gender[],
];
