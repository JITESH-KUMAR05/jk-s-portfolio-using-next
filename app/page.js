import Image from "next/image";
import Hero from "./hero/page";
import Navbar from "@/components/Navbar";
import PreLoader from "@/components/PreLoader";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
    <div>
      <PreLoader />
      <Hero />
      <About />
      <Projects />

    </div>

    
    {/* <div className="flex justify-center flex-col items-center text-white h-[44vh] ">

      <div className=" font-bold text-3xl ">
        Buy me a chai
      </div>
      <p>this is for for me so that i can get chai</p>
      <div>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>

      </div>
      
    </div> */}
    {/* <div className="bg-white opacity-10 h-1 "></div> */}

    </>
  );
}
