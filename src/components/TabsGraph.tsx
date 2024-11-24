"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const TabsGraph = ({ tabs }: { tabs: { label: string; content: JSX.Element }[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tabs aligned to the top-right corner */}
      <div
        className="tabs"
        style={{
          display: "flex",
          justifyContent: "flex-start", // Aligns the buttons to the left
          alignItems: "flex-start", 
          gap: "10px", // Adds spacing between buttons
          marginBottom: "50px",
          marginTop: "10px", // Ensures a small margin from the top of the page
        }}
      >
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveTab(index)}
            variant={activeTab === index ? "default" : "outline"}
            size="sm"
            className="text-1xl px-10 py-6 w-[200px]" // Tailwind classes for font size and padding
          >
            {tab.label}
          </Button>
        ))}
      </div>
      {/* Render the content of the active tab */}
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabsGraph;
