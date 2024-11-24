import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ChartColumn, Timer } from "lucide-react";

const Tab = async () => {

    return (
        <div className="bg-white fixed z-50 bottom-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="flex h-16 items-center justify-center">
                        <div className="flex space-x-4">
                            <Link href="/timer" className={`${buttonVariants({ variant: "ghost" })} text-xl flex items-center`} >Timer <Timer/> </Link>
                            <Link href="/graphs" className={`${buttonVariants({ variant: "ghost" })} text-xl flex items-center`}>Graphs <ChartColumn/> </Link>        
                        </div>                       
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Tab
