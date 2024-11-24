"use client"

import { BarChart } from "@/components/BarChart"
import { AvailableChartColors } from "@/lib/chartUtils"

const chartdata = [
    {
        date: "Sunday",
        Hobby: 2,
    },
    {
        date: "Monday",
        Hobby: 1.5,
    },
    {
        date: "Tuesday",
        Hobby: 3.25,
    },
    {
        date: "Wednesday",
        Hobby: 0.5,
    },
    {
        date: "Thursday",
        Hobby: 4,
    },
    {
        date: "Friday",
        Hobby: 1.75,
    },
    {
        date: "Saturday",
        Hobby: 2.25,
    },
]

export const HobbyChartHero = () => {
    // Helper function to format time as HH:MM
    const valueFormatter = (number: number) => {
        const hours = Math.floor(number); // Get the whole number of hours
        const minutes = Math.round((number - hours) * 60); // Get the remaining minutes
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "00")}`;
    };

    // Calculate the cumulative hobby time from the chart data
    const totalHobbyTime = chartdata.reduce((total, day) => total + day.Hobby, 0);

    return (
        <div className="relative">
            {/* Cumulative time box positioned above the chart with adjusted size */}
            <div className="absolute top-[-220px] right-4 p-8 bg-primary text-white rounded-lg shadow-lg w-[240px]">
                {/* Weekly Summary label positioned in the top left */}
                <p className="text-xl font-semibold absolute top-4 left-4">Weekly Summary:</p>
                
                {/* Time in larger size and centered */}
                <p className="text-6xl font-bold text-center mt-6">{valueFormatter(totalHobbyTime)}</p>
            </div>

            {/* Render the BarChart component */}
            <BarChart
                data={chartdata}
                index="date"
                categories={["Hobby"]}
                valueFormatter={valueFormatter}
                onValueChange={(v) => console.log(v)}
                colors={AvailableChartColors}
            />
        </div>
    );
};
