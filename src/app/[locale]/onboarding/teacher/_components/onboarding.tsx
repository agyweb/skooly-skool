"use client";

import { useMemo, useState } from "react";
import EssentialInfo from "./essential-info";
import Qualifications from "./qualifications";
import TeachingProfile from "./teaching-profile";
import ServiceDetails from "./service-details";
import { Button } from "@/components/ui/button";

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const stepName = useMemo(() => {
    switch (currentStep) {
      case 1:
        return "Essential Info";
      case 2:
        return "Qualifications";
      case 3:
        return "Teaching Profile";
      case 4:
        return "Service Details";
    }
  }, [currentStep]);

  const stepDescription = useMemo(() => {
    switch (currentStep) {
      case 1:
        return "Introduce yourself and establish your teaching identity with key personal information.";
      case 2:
        return "Build credibility by highlighting your academic achievements and professional teaching experience.";
      case 3:
        return "Define your unique teaching philosophy and subject expertise to attract your ideal students.";
      case 4:
        return "Customize how, when, and where you teach to create the perfect teaching arrangement for your lifestyle.";
    }
  }, [currentStep]);

  const getOnboardingStep = () => {
    switch (currentStep) {
      case 1:
        return <EssentialInfo />;
      case 2:
        return <Qualifications />;
      case 3:
        return <TeachingProfile />;
      case 4:
        return <ServiceDetails />;
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-1 flex-col justify-between pb-8 pt-10">
      <div className="h-screen">
        <div className="font-medium text-primary">Step {currentStep} of 4</div>
        <h1 className="text-4xl font-semibold tracking-tight">{stepName}</h1>
        <p className="mt-1 leading-relaxed text-muted-foreground">
          {stepDescription}
        </p>

        {getOnboardingStep()}
      </div>

      {/* <div className="mx-auto mt-8 flex w-full max-w-[800px] justify-between">
        <Button
          disabled={currentStep === 1}
          variant={"outline"}
          className="rounded-md border border-primary px-5 py-[10px] font-medium text-primary hover:text-primary"
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
        >
          Back
        </Button>
        <Button
          disabled={currentStep === 4}
          className="px-5 py-[10px] font-medium"
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 4))}
        >
          Next
        </Button>
      </div> */}
    </div>
  );
}
