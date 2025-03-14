import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ClerkProvider from "./clerk-provider";
import ConvexProvider from "./convex-provider";

export default async function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <ClerkProvider>
          <ConvexProvider>{children}</ConvexProvider>
        </ClerkProvider>
      </NextIntlClientProvider>
    </>
  );
}
