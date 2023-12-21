import { Link } from "react-router-dom";
import { HomeIcon, ShoppingBasket, LeafyGreen, LogOutIcon } from "lucide-react";
const content = () => {
  return (
    <div className="min-h-full w-full flex flex-col justify-between items-start text-white ">
      <div className="space-y-5 flex flex-col flex-1 w-full">
        <Link className="text-[#5d4124] px-2 flex space-x-2 items-center py-2 inset-6 bg-[#ba9369] rounded-lg w-full" to="/">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link className=" px-2 flex space-x-3 items-center hover:text-[#5d4124] hover:bg-[#ba9369] transition-all rounded-lg w-full py-2 " to="/">
          <LeafyGreen />
          <span>Shop</span>
        </Link>
        <Link className="px-2 flex space-x-3 items-center hover:text-[#5d4124] hover:bg-[#ba9369] transition-all rounded-lg w-full py-2 " to="/">
          <ShoppingBasket />
          <span>Cart</span>
        </Link>
      </div>
      <div className="px-2 place-content-end items-end place-items-end mt-12 w-full">
        <Link className=" px-2 flex space-x-3 items-center hover:text-[#5d4124] hover:bg-[#ba9369] transition-all rounded-lg w-full py-2 " to="/">
          <LogOutIcon />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default content;
