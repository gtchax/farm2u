import { LeafyGreen } from "lucide-react";
import box from "../assets/box.png";
const Logo = ({className}) => {
  return (
    <div className={`py-3 px-2 flex text-bold items-center ${className}`}>
      <img src={box} className="inline-block h-8" />
      <p>
  
        Farm<span className="text-[#257600] ">2</span>U
      </p>
    </div>
  );
};

export default Logo;
