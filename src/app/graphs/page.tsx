import { BarChartHero } from "@/components/BarChartHero";
import TabsGraph from "@/components/TabsGraph"; // Import the Tabs component
//import { LineChartHero } from "@/components/LineChartHero"; // If you have this component for the Line Chart

const Page = () => {
  //tabs and their content
  const tabs = [
    {
      label: "School",
      content: <BarChartHero />,
    },
    {
      label: "Working Out",
      content: <BarChartHero />,
    },
    {
        label: "Hobbies",
        content: <BarChartHero />
      },
  ];
  
  

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div style={{ marginTop: "90px" }}></div>
      <h1 className="text-3xl font-bold text-left">This Week at a Glance</h1>
      <div style={{ marginTop: "70px" }}></div>
      
      {/* Render the Tabs component, passing the tabs array */}
      <TabsGraph tabs={tabs} />
    </div>
  );
};

export default Page;
