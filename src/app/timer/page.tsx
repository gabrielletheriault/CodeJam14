"use client"

import Stopwatch from "@/components/Stopwatch";
import Image from "next/image";

export default function Home() {
  return (

    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
       
       <h1 className={`text-7xl font-bold tracking-tight font-mono`}> 
          TickTrack
        </h1>
       
        <div style={{ marginTop: "120px" }}></div>

        <h1 className='text-4xl font-bold tracking-tight'> 
          <Stopwatch/>
        </h1>

    </div>



  );
}
