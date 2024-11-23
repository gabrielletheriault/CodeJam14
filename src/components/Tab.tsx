import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
const Tab = async () => {

    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <div className="flex h-16 items-center justify-center">
                                <Link href="/" className={buttonVariants({variant: "ghost",})}>Timer</Link>
                                <Link href="/graphs" className={buttonVariants({variant: "ghost",})}>Graphs</Link>                               
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Tab
