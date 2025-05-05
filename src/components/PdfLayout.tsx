// components/PlanPDFPreview.tsx
"use client";
import React, { forwardRef } from "react";
import { Doc } from "../../convex/_generated/dataModel";

type PDFLayoutProps = {
  currentPlan: Doc<"plans">;
  ref?: React.Ref<HTMLDivElement>;
};

const PlanPDFPreview = forwardRef<HTMLDivElement, PDFLayoutProps>(
  ({ currentPlan }, ref) => {
    if (!currentPlan) return null;

    return (
      <div
        ref={ref}
        className="w-full max-w-3xl p-8 bg-white text-black rounded shadow space-y-6"
      >
        <h1 className="text-3xl font-extrabold text-center border-b pb-4">
          <span className="text-primary">Nutra AI</span> - Fitness Plan
        </h1>

        <section>
          <h2 className="text-xl font-bold mb-2">
            Plan Name: {currentPlan.name}
          </h2>
        </section>

        <section>
          <h3 className="text-lg font-semibold mt-4 mb-2">Workout Schedule</h3>
          {currentPlan.workoutPlan?.exercises.map((day, i) => (
            <div key={i} className="mb-3">
              <strong>{day.day}</strong>
              <ul className="ml-4 list-disc">
                {day.routines.map((routine, j) => (
                  <li key={j}>
                    {routine.name} - {routine.sets} sets x {routine.reps} reps
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h3 className="text-lg font-semibold mt-4 mb-2">
            Diet Plan (Daily Calories: {currentPlan.dietPlan.dailyCalories})
          </h3>
          {currentPlan.dietPlan?.meals.map((meal, i) => (
            <div key={i} className="mb-3">
              <strong>{meal.name}</strong>
              <ul className="ml-4 list-disc">
                {meal.foods.map((food, j) => (
                  <li key={j}>{food}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    );
  }
);
PlanPDFPreview.displayName = "PlanPDFPreview";

export default PlanPDFPreview;
