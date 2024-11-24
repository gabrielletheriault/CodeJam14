"use client";

import { BarChart } from "@/components/BarChart";
import { AvailableChartColors } from "@/lib/chartUtils";

const chartdata = [
    {
        date: "Sunday",
        Exercise: 0,
    },
    {
        date: "Monday",
        Exercise: 0,
    },
    {
        date: "Tuesday",
        Exercise: 0,
    },
    {
        date: "Wednesday",
        Exercise: 8,
    },
    {
        date: "Thursday",
        Exercise: 2,
    },
    {
        date: "Friday",
        Exercise: 8,
    },
    {
        date: "Saturday",
        Exercise: 6,
    },
];

export const ExerciseChartHero = () => {
    // Helper function to format time as HH:MM
    const valueFormatter = (number: number) => {
        const hours = Math.floor(number); // Get the whole number of hours
        const minutes = Math.round((number - hours) * 60); // Get the remaining minutes
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "00")}`;
    };

    // Calculate the cumulative exercise time from the chart data
    const totalExerciseTime = chartdata.reduce((total, day) => total + day.Exercise, 0);

    return (
        <div className="relative">
            {/* Cumulative time box positioned above the chart with adjusted size */}
            <div className="absolute top-[-220px] right-4 p-8 bg-blue-500 text-white rounded-lg shadow-lg">
                {/* Weekly Summary label positioned in the top left */}
                <p className="text-xl font-semibold absolute top-4 left-4">Weekly Summary:</p>
                
                {/* Time in larger size and centered */}
                <p className="text-6xl font-bold text-center mt-6">{valueFormatter(totalExerciseTime)}</p>
            </div>

            {/* Render the BarChart component */}
            <BarChart
                data={chartdata}
                index="date"
                categories={["Exercise"]}
                valueFormatter={valueFormatter}
                onValueChange={(v) => console.log(v)}
                colors={AvailableChartColors}
            />
        </div>
    );
};
