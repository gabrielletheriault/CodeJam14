"use client"

import { BarChart } from "@/components/BarChart"

const chartdata = [
    {
        date: "Sunday",
        Studying: 4,
    },
    {
        date: "Monday",
        Studying: 2,
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
    {
        date: "Sunday",
        Studying: 5,
    },
]

export const BarChartHero = () => {
    const valueFormatter = (number: number) =>
        `${Intl.NumberFormat("us").format(number).toString()} hours`

    const onValueChange = (v: any) => {
        console.log(v)
    }

    return (
        <BarChart
            className="h-80"
            data={chartdata}
            index="date"
            categories={["Studying"]}
            valueFormatter={valueFormatter}
            onValueChange={onValueChange}
        />
    )
}