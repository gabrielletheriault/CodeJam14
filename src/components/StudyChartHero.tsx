"use client"

import { BarChart } from "@/components/BarChart"
import { AvailableChartColors } from "@/lib/chartUtils"

const chartdata = [
    {
        date: "Sunday",
        Studying: 4,
    },
    {
        date: "Monday",
        Studying: 0.28,
    },
    {
        date: "Tuesday",
        Studying: 3.5,
    },
    {
        date: "Wednesday",
        Studying: 3,
    },
    {
        date: "Thursday",
        Studying: 0,
    },
    {
        date: "Friday",
        Studying: 8,
    },
    {
        date: "Saturday",
        Studying: 1.4746384589,
    },
]

export const StudyChartHero = () => {
    // Helper function to format time as HH:MM
    const valueFormatter = (number: number) => {
        const hours = Math.floor(number); // Get the whole number of hours
        const minutes = Math.round((number - hours) * 60); // Get the remaining minutes
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "00")}`;
    };

    // Calculate the cumulative studying time from the chart data
    const totalStudyingTime = chartdata.reduce((total, day) => total + day.Studying, 0);

    return (
        <div className="relative">
            {/* Cumulative time box positioned above the chart with adjusted size */}
            <div className="absolute top-[-220px] right-4 p-8 bg-primary text-white rounded-lg shadow-lg w-[240px]">
                {/* Weekly Summary label positioned in the top left */}
                <p className="text-xl font-semibold absolute top-4 left-4">Weekly Summary:</p>
                
                {/* Time in larger size and centered */}
                <p className="text-6xl font-bold text-center mt-6">{valueFormatter(totalStudyingTime)}</p>
            </div>

            {/* Render the BarChart component */}
            <BarChart
                data={chartdata}
                index="date"
                categories={["Studying"]}
                valueFormatter={valueFormatter}
                onValueChange={(v) => console.log(v)}
                colors={AvailableChartColors}
            />
        </div>
    );
};
