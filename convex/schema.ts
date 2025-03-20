import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const ConvexGender = v.union(v.literal("male"), v.literal("female"));
export const ConvexLanguage = v.union(
  v.literal("en"),
  v.literal("fr"),
  v.literal("ar"),
);
export const ConvexEducationLevel = v.union(
  v.literal("en"),
  v.literal("fr"),
  v.literal("ar"),
);
export const ConvexUserMode = v.union(
  v.literal("teacher"),
  v.literal("student"),
  v.literal("parent"),
);
export const ConvexTeachLearnMode = v.union(
  v.literal("online"),
  v.literal("in-person"),
  v.literal("hybrid"),
);
export const ConvexPaymentPlan = v.union(
  v.literal("session"),
  v.literal("month"),
  v.literal("both"),
);
export const experienceRanges = v.union(
  v.literal("0-2"),
  v.literal("3-5"),
  v.literal("6-10"),
  v.literal("11+"),
);

export default defineSchema({
  users: defineTable({
    email: v.string(),
    clerkUserId: v.string(),
    clerkProfileImg: v.string(),
    mode: v.optional(ConvexUserMode),
    isOnboardingDone: v.optional(v.boolean()),
  }).index("byClerkUserId", ["clerkUserId"]),

  parents: defineTable({
    userId: v.id("users"),
    fullName: v.string(),
    age: v.number(),
    gender: ConvexGender,
    country: v.optional(v.string()),
    city: v.string(),
  }).index("byUserId", ["userId"]),

  students: defineTable({
    userId: v.id("users"),
    fullName: v.string(),
    age: v.number(),
    gender: ConvexGender,
    location: v.object({
      country: v.string(),
      city: v.string(),
    }),
    preferredLearningMode: ConvexTeachLearnMode,
    preferredPaymentPlan: ConvexPaymentPlan,
    nativeLanguage: ConvexLanguage,
    educationLanguage: ConvexLanguage,
  }).index("byUserId", ["userId"]),

  studentEducation: defineTable({
    studentId: v.id("students"),
    type: v.union(
      v.literal("Primary Education"),
      v.literal("Lower Secondary Education"),
      v.literal("Upper Secondary Education"),
    ),
    year: v.optional(
      v.union(
        v.literal("1st Year"),
        v.literal("2nd Year"),
        v.literal("3rd Year"),
        v.literal("4th Year"),
        v.literal("5th Year"),
        v.literal("6th Year"),
      ),
    ),
    trackType: v.optional(
      v.union(
        v.literal("Common Core"),
        v.literal("First Year Baccalaureate"),
        v.literal("Second Year Baccalaureate"),
      ),
    ),
    trackName: v.optional(
      v.union(
        v.literal("Science Track"),
        v.literal("Arts Track"),
        v.literal("Technology Track"),
        v.literal("Mathematical Sciences"),
        v.literal("Experimental Sciences"),
        v.literal("Economic Sciences"),
        v.literal("Literature and Humanities"),
        v.literal("Mathematical Sciences Track"),
        v.literal("Physical Sciences Track"),
        v.literal("Life and Earth Sciences Track"),
        v.literal("Agricultural Sciences Track"),
        v.literal("Economic and Management Sciences Track"),
        v.literal("Literature and Humanities Track"),
      ),
    ),
    desiredSubjects: v.array(
      v.union(
        v.literal("Mathematics"),
        v.literal("Scientific Activity"),
        v.literal("Arabic Language"),
        v.literal("French Language"),
        v.literal("Islamic Education"),
        v.literal("Arts Education"),
        v.literal("Social Studies"),
        v.literal("Physics and Chemistry"),
        v.literal("Life and Earth Sciences"),
        v.literal("Computer Science"),
        v.literal("Industrial Technology"),
        v.literal("English Language"),
        v.literal("Philosophy"),
        v.literal("Engineering Sciences"),
        v.literal("Economics"),
        v.literal("Accounting and Management"),
        v.literal("History and Geography"),
        v.literal("Technology"),
        v.literal("Agricultural Sciences"),
      ),
    ),
    desiredSubjectsString: v.string(),
  }).index("byStudentId", ["studentId"]),

  teachers: defineTable({
    userId: v.id("users"),
    fullName: v.string(),
    profileImg: v.optional(v.id("_storage")),
    age: v.number(),
    gender: ConvexGender,
    nativeLanguage: ConvexLanguage,
    teachingLanguage: ConvexLanguage,
    location: v.object({
      country: v.string(),
      city: v.string(),
    }),
    phoneNumber: v.object({
      countryCode: v.string(),
      number: v.string(),
    }),
    highestDegree: v.union(
      v.literal("Bachelor"),
      v.literal("Master"),
      v.literal("Doctoral"),
    ),
    yearsOfExperience: experienceRanges,
    teachingCertifications: v.optional(v.array(v.id("_storage"))),
    teachingStyles: v.array(
      v.union(
        v.literal("Interactive Learning"),
        v.literal("Structured Teaching"),
        v.literal("Practice-Focused"),
        v.literal("Concept-Based"),
        v.literal("Mixed Approach"),
      ),
    ),
    teachingMode: ConvexTeachLearnMode,
    pricingStructure: ConvexPaymentPlan,
  })
    .index("byUserId", ["userId"])
    .index("byGender", ["gender"])
    .index("byNativeLanguage", ["nativeLanguage"])
    .index("byTeachingLanguage", ["teachingLanguage"])
    .index("byHighestDegree", ["highestDegree"])
    .index("byYearsOfExperience", ["yearsOfExperience"])
    .index("byTeachingStyles", ["teachingStyles"])
    .index("byTeachingMode", ["teachingMode"])
    .index("byPricingStructure", ["pricingStructure"]),

  teacherEducation: defineTable({
    teacherId: v.id("teachers"),
    type: v.union(
      v.literal("Primary Education"),
      v.literal("Lower Secondary Education"),
      v.literal("Upper Secondary Education"),
    ),
    year: v.optional(
      v.union(
        v.literal("1st Year"),
        v.literal("2nd Year"),
        v.literal("3rd Year"),
        v.literal("4th Year"),
        v.literal("5th Year"),
        v.literal("6th Year"),
      ),
    ),
    trackType: v.optional(
      v.union(
        v.literal("Common Core"),
        v.literal("First Year Baccalaureate"),
        v.literal("Second Year Baccalaureate"),
      ),
    ),
    trackName: v.optional(
      v.union(
        v.literal("Science Track"),
        v.literal("Arts Track"),
        v.literal("Technology Track"),
        v.literal("Mathematical Sciences"),
        v.literal("Experimental Sciences"),
        v.literal("Economic Sciences"),
        v.literal("Literature and Humanities"),
        v.literal("Mathematical Sciences Track"),
        v.literal("Physical Sciences Track"),
        v.literal("Life and Earth Sciences Track"),
        v.literal("Agricultural Sciences Track"),
        v.literal("Economic and Management Sciences Track"),
        v.literal("Literature and Humanities Track"),
      ),
    ),
    subjects: v.array(
      v.union(
        v.literal("Mathematics"),
        v.literal("Scientific Activity"),
        v.literal("Arabic Language"),
        v.literal("French Language"),
        v.literal("Islamic Education"),
        v.literal("Arts Education"),
        v.literal("Social Studies"),
        v.literal("Physics and Chemistry"),
        v.literal("Life and Earth Sciences"),
        v.literal("Computer Science"),
        v.literal("Industrial Technology"),
        v.literal("English Language"),
        v.literal("Philosophy"),
        v.literal("Engineering Sciences"),
        v.literal("Economics"),
        v.literal("Accounting and Management"),
        v.literal("History and Geography"),
        v.literal("Technology"),
        v.literal("Agricultural Sciences"),
      ),
    ),
    subjectsString: v.string(),
  })
    .index("byTeacherId", ["teacherId"])
    .index("byType", ["type"])
    .index("byYear", ["year"])
    .index("byTrackType", ["trackType"])
    .index("byTrackName", ["trackName"])
    .searchIndex("searchSubject", {
      searchField: "subjectsString",
    }),
});
