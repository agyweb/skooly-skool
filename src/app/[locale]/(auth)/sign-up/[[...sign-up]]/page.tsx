import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      fallbackRedirectUrl={"/"}
      appearance={{
        variables: {
          colorPrimary: "#0a0a0a",
        },
      }}
    />
  );
}
