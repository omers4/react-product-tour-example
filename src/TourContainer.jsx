import React from "react";
import { TourStep } from "./TourStep";
import { useTourStore } from "./tourStore";

export function TourContainer({ children, id }) {
  const { isStepActive } = useTourStore();

  return (
    <TourStep open={isStepActive(id)} id={id}>
      {children}
    </TourStep>
  );
}
