"use client";

import Image from "next/image";
import Onboarding from "./_components/onboarding";

export default function TeacherOnboardingPage() {
  return (
    <div className="box flex h-screen flex-col">
      <header className="flex items-center justify-between gap-x-3 py-3">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <div className="flex items-center gap-x-1">
          <div className="relative bottom-[2.5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="21"
              height="21"
              fill="#174dd3"
            >
              <path d="m12,12c3.309,0,6-2.691,6-6S15.309,0,12,0s-6,2.691-6,6,2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm9,21c0,.552-.447,1-1,1s-1-.448-1-1c0-3.019-1.925-5.59-4.609-6.57l-1.517,2.276,1.093,3.99c.183.666-.405,1.305-1.201,1.305h-1.532c-.796,0-1.383-.639-1.201-1.305l1.093-3.99-1.517-2.276c-2.684.98-4.609,3.551-4.609,6.571,0,.552-.448,1-1,1s-1-.448-1-1c0-4.962,4.038-9,9-9s9,4.038,9,9Z" />
            </svg>
          </div>

          <p className="tracking-tight">Teacher Onboarding</p>
        </div>
      </header>

      <Onboarding />
    </div>
  );
}
