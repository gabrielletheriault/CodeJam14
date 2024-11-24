import { StudyChartHero } from "@/components/StudyChartHero";
import { ExerciseChartHero } from "@/components/ExerciseChartHero";
import { HobbyChartHero } from "@/components/HobbyChartHero";

import TabsGraph from "@/components/TabsGraph"; // Import the Tabs component

const Page = () => {
  //tabs and their content
  const tabs = [
    {
      label: "Studying",
      content: <StudyChartHero />,
    },
    {
      label: "Exercising",
      content: <ExerciseChartHero />,
    },
    {
        label: "Hobbies",
        content: <HobbyChartHero />
      },
  ];
  
  

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      
      <div style={{ marginTop: "90px" }}></div>
      <div style={{ marginTop: "90px" }}></div>
      <h1 className="text-[64px] font-bold text-left">This Week at a Glance</h1>
      <div style={{ marginTop: "40px" }}></div>
      
      {/* Render the Tabs component, passing the tabs array */}
      <TabsGraph tabs={tabs} />
    </div>
  );
};

export default Page;
