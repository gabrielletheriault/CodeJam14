"use client";

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
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div style={{ marginTop: "90px" }}></div>
      <h1 className="text-[64px] font-bold text-left">This Week at a Glance</h1>

      {/* Render the Tabs component, passing the tabs array */}
      <TabsGraph tabs={tabs} />
    </div>
  );
};

export default Page;