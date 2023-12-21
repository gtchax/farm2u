import { Link } from "react-router-dom";
import { ArrowRightCircleIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="h-[35rem] w-full flex flex-col relative z-20">
     
      <div className="relative flex  justify-center items-center h-full px-4 md:px-0 ">
        <div className="text-center"></div>
        {/* <div className="flex items-center justify-center z-0 absolute -bottom-5 left-0 bg-orange-500 h-40 w-40 rounded-full shadow-lg"></div> */}
        <div className="text-center">
        <div className="mb-10 text-xs font-mono rounded-full text-white bg-black inline-block px-3 py-1 border border-black">Deliveries to Harare - Zimbabwe</div>
          <p className="anton font-bold text-3xl xs:text-3xl  sm:text-4xl md:text-5xl leading-[20px]">
            <span className="anton text-green-700">Harvested </span> with Care
          </p>
          <p className="anton font-bold md:text-left my-4 text-3xl xs:text-3xl sm:text-4xl md:text-5xl  ">
            Delivered with <span className="text-green-700">Love</span>
          </p>
          <p className="text-center text-md md:text-xl">
            Farm-Fresh Produce, Straight to Your Doorstep
          </p>
          <div className="mt-14 text-center transition-all ">
            <Link
              to="/"
              className="bg-[#f9a425] px-5 py-3 text-black   shadow-4xl rounded-full"
            >
              Start Shopping{" "}
              <ArrowRightCircleIcon className=" inline text-black" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="hidden lg:flex flex-1 h-full w-full relative transition-all">
        <div className="h-full w-full z-10 chick" id="mask">
          
        </div>
        <div className="absolute -bottom-[17rem] -left-[14.5rem] w-full h-full scale-75 z-10 chick"></div>

      </div> */}
    </div>
  );
};

export default Hero;
