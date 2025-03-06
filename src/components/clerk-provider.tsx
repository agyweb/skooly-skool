import { ClerkProvider as ImportedClerkProvider } from "@clerk/nextjs";

export default function ClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ImportedClerkProvider>{children}</ImportedClerkProvider>;
}
