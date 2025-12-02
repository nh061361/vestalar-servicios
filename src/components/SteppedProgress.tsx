
'use client';

import { cn } from "@/lib/utils";

interface SteppedProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function SteppedProgress({ currentStep, totalSteps }: SteppedProgressProps) {
  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <div key={step} className="flex items-center space-x-2">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all",
                isActive ? "border-primary bg-primary text-primary-foreground" : "border-border bg-transparent",
                isCompleted ? "border-primary bg-primary text-primary-foreground" : ""
              )}
            >
              {isCompleted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <span className={cn(isActive ? "font-bold" : "")}>{step}</span>
              )}
            </div>
            {step < totalSteps && (
              <div
                className={cn(
                  "h-1 w-12 rounded-full transition-all",
                  isCompleted ? "bg-primary" : "bg-border"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
