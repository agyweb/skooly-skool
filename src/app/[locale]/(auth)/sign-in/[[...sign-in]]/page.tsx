import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const { userId } = await auth();
  if (userId) redirect("/guard");

  return (
    <SignIn
      appearance={{
        variables: {
          colorPrimary: "#0a0a0a",
        },
      }}
    />
  );
}
