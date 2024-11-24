"use client";

import { useState } from "react"; // Import useState to manage state
import { StudyChartHero } from "@/components/StudyChartHero";
import { ExerciseChartHero } from "@/components/ExerciseChartHero";
import { HobbyChartHero } from "@/components/HobbyChartHero";
import TabsGraph from "@/components/TabsGraph"; // Import the Tabs component

const Page = () => {
  // Hard-set cumulative times for each activity (in milliseconds)
  const studyTime = 5000000; // Example: 1 hour 23 minutes 20 seconds
  const exerciseTime = 3600000; // Example: 1 hour
  const hobbyTime = 1200000; // Example: 20 minutes

  // Tabs and their content
  const tabs = [
    {
      label: "Studying",
      content: <StudyChartHero cumulativeTime={studyTime} />, // Pass hard-set time
    },
    {
      label: "Exercising",
      content: <ExerciseChartHero cumulativeTime={exerciseTime} />, // Pass hard-set time
    },
    {
      label: "Hobbies",
      content: <HobbyChartHero cumulativeTime={hobbyTime} />, // Pass hard-set time
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6 font-mono">
      <div style={{ marginTop: "90px" }}></div>
      <div style={{ marginTop: "90px" }}></div>
      <h1 className="text-[64px] font-bold text-left font-mono">This Week at a Glance</h1>
      <div style={{ marginTop: "40px" }}></div>

      {/* Render the Tabs component, passing the tabs array */}
      <TabsGraph tabs={tabs} />
    </div>
  );
};

// Helper function to format time as HH:MM:SS
const formatTime = (time: number) => {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default Page;