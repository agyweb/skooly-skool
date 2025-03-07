import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      fallbackRedirectUrl={"/"}
      appearance={{
        variables: {
          colorPrimary: "#0a0a0a",
        },
      }}
    />
  );
}
