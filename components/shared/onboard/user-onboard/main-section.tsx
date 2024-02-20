"use client";
import LeftSideBarUserOnboard from "@/components/shared/onboard/user-onboard/left-sidebar";
import { use, useState } from "react";
import UserOnboardForm from "./user-onboard-form";
import { Step } from "@/utils/types";
import { User } from "@clerk/nextjs/server";

export interface UserProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const UserOnboard = (user: UserProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };
  const steps: Step[] = [
    {
      id: "Step 1",
      stepNumber: 1,
      name: "Personal Information",
    },
    {
      id: "Step 2",
      stepNumber: 2,
      name: "Academic Background",
    },
    {
      id: "Step 3",
      stepNumber: 3,
      name: "Career Goals",
    },
    {
      id: "Step 4",
      stepNumber: 4,
      name: "Time Commitment",
    },
    {
      id: "Step 5",
      stepNumber: 5,
      name: "Technical Skills",
    },
    {
      id: "Step 6",
      stepNumber: 6,
      name: "Thanks",
    },
  ];
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-1/5 p-4 h-screen  sticky top-0">
        <div
          className="bg-cover bg-center p-4 rounded-md h-full flex flex-col gap-4"
          style={{
            borderRadius: "10px",
            backgroundImage: "url('/svg/bg-sidebar-desktop.svg')",
          }}
        >
          {steps.map((step, index) => (
            <LeftSideBarUserOnboard
              steps={step}
              key={step.id}
              index={index}
              currentStep={currentStep}
            />
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-4">
        <UserOnboardForm
          currentStep={currentStep}
          previousStep={previousStep}
          steps={steps}
          prev={prev}
          next={next}
          user={user}
          // user={user}
        />
      </div>
    </div>
  );
};
export default UserOnboard;
