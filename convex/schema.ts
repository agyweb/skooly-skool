import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const ConvexUserMode = v.union(
  v.literal("teacher"),
  v.literal("student"),
  v.literal("parent"),
);

export default defineSchema({
  users: defineTable({
    email: v.string(),
    clerkUserId: v.string(),
    profileImgUrl: v.string(),
    mode: v.optional(ConvexUserMode),
    isOnboardingDone: v.optional(v.boolean()),
  }).index("byClerkUserId", ["clerkUserId"]),
});
