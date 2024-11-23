import { BarChartHero } from "@/components/BarChartHero"

const Page = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6">
            <div style={{ marginTop: "90px" }}></div>
            <h1 className="text-3xl font-bold text-left">This Week at a Glance</h1>
            <div style={{ marginTop: "70px" }}></div>
            <div style={{ height: "7000px", width: "100%" }}>
                <BarChartHero />
            </div>
        </div>
    )
}

export default Page
