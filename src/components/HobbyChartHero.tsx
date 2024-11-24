"use client"

import { BarChart } from "@/components/BarChart"
import { AvailableChartColors } from "@/lib/chartUtils"

const chartdata = [
    {
        date: "Sunday",
        Studying: 0,
    },
    {
        date: "Monday",
        Studying: 10,
    },
    {
        date: "Tuesday",
        Studying: 3.5,
    },
    {
        date: "Wednesday",
        Studying: 5,
    },
    {
        date: "Thursday",
        Studying: 7,
    },
    {
        date: "Friday",
        Studying: 11,
    },
    {
        date: "Saturday",
        Studying: 0.9999,
    },
]

export const HobbyChartHero = () => {
    const valueFormatter = (number: number) => {
        const hours = Math.floor(number) // Get the whole number of hours
        const minutes = Math.round((number - hours) * 60) // Get the remaining minutes
        if (minutes == 0)
            return `${hours} hours`;
        else if (hours ==0)
            return `${minutes} minutes`;
        else
            return `${hours} hours ${minutes} minutes`;
    }

    const onValueChange = (v: any) => {
        console.log(v)
    }

    return (
        <BarChart
            data={chartdata}
            index="date"
            categories={["Studying"]}
            valueFormatter={valueFormatter}
            onValueChange={onValueChange} 
            colors={AvailableChartColors} />

    )
}