import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    clerkUserId: v.string(),
    profileImgUrl: v.string(),
  }).index("byClerkUserId", ["clerkUserId"]),
});
