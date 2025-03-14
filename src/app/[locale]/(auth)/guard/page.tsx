import { redirect } from "next/navigation";
import Guard from "./_components/guard";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../../convex/_generated/api";
import { getAuthToken } from "@/utilities/utils";

export default async function AuthGuard() {
  const token = await getAuthToken();
  const user = await fetchQuery(api.users.current, {}, { token });

  if (!user) redirect("/");
  if (user.isOnboardingDone) return redirect("/?onboarding=true");

  return <Guard user={user} />;
}
