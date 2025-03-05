import Link from "next/link";
import SignUpForm from "./_components/sign-up-form";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <div className="flex h-full flex-col items-start justify-between gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src="/logo.png" width={60} height={60} alt="" />
            </Link>
          </div>

          <div className="relative flex flex-col flex-nowrap gap-4 overflow-hidden">
            <p className="inline-block text-4xl font-semibold">
              Where Teachers and Students Connect.
            </p>

            <span className="inline-block text-xs text-muted-foreground">
              © {new Date().getFullYear()} Skooly Skool. All rights reserved.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="/"
            className="flex items-center gap-2 font-medium lg:hidden"
          >
            <Image src="/logo.png" width={50} height={50} alt="" />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
