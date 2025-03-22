import { z } from "zod";

export const MAX_IMAGE_SIZE = 1024 * 1024 * 5; //5MB

export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const imageSchema = z
  .instanceof(File, {
    message: "Please select an image file.",
  })
  .refine((file) => file.size <= MAX_IMAGE_SIZE, {
    message: `The image is too large. Please choose an image smaller than 5MB.`,
  })
  .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
    message: "Please upload a valid image file (JPEG, PNG, or WebP).",
  });
