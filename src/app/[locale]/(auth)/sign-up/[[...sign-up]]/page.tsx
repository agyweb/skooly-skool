import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const { userId } = await auth();
  if (userId) redirect("/guard");

  return (
    <SignUp
      appearance={{
        variables: {
          colorPrimary: "#0a0a0a",
        },
      }}
    />
  );
}
