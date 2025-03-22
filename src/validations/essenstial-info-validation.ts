import { gendersEnums, languagesEnums } from "@/constants/common";
import { z } from "zod";
import { imageSchema } from "./media-validation";
import { moroccanCitiesEnums } from "@/constants/moroccan-cities";

export const essentialInfoSchema = z.object({
  fullName: z
    .string({
      required_error: "FullName is required",
    })
    .trim()
    .nonempty("FullName is required")
    .min(3, "FullName is too short")
    .max(40, "FullName is too long"),

  age: z
    .number({
      required_error: "Age is required",
    })
    .int()
    .min(22, "You must be at least 22 years old")
    .max(70, "You must be at most 70 years old"),

  gender: z.enum(gendersEnums, {
    required_error: "Gender is required",
  }),

  nativeLanguage: z.enum(languagesEnums, {
    required_error: "Native language is required",
  }),

  teachingLanguage: z.array(
    z.enum(languagesEnums, {
      required_error: "Teaching language is required",
    }),
  ),

  phoneNumber: z.string().refine(
    (value) => {
      const phoneRegex = /^(07|06)\d{8}$/;
      return phoneRegex.test(value);
    },
    {
      message:
        "Please enter a valid 10-digit mobile number starting with 07 or 06",
    },
  ),

  profileImage: imageSchema.optional(),

  city: z.enum(moroccanCitiesEnums, {
    required_error: "City is required",
  }),
});
