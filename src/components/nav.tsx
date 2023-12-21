import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingBasketIcon, AlignRightIcon } from "lucide-react";
import Logo from "./logo";
import SideBar from "./ui/aside/sidebar";

const Navbar = () => {
  return (
    // <nav className="fixed overflow-hidden z-50 top-6 container md:border px-2 py-1 w-full md:w-[35rem] md:rounded-full md:shadow-2xl  md:bg-[#fcfbf9] flex items-center justify-between">
    //   <Logo />
    //   <ul className="hidden md:flex items-center space-x-6 relative">
    //     <li className="relative ">
    //       <Link to="" className="text-green-700 menubar">
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="">Shop</Link>
    //     </li>

    //     <li>
    //       <Link to="">Contact</Link>
    //     </li>
    //     <li>
    //       <ShoppingBasketIcon className="w-5 h-5" />
    //     </li>
    //     <Button className="rounded-full border-green-700 border-2 text-white bg-green-700">
    //       Login
    //     </Button>
    //   </ul>
    //   <div className="md:hidden">
    //     <AlignRightIcon className="text-white w-8 h-8 cursor-pointer" />
    //   </div>
    // </nav>
    <nav className="container w-full flex items-center justify-between">
      <Logo className=""/>
      <ul className="hidden md:flex items-center space-x-6 relative">
        <li className="relative ">
          <Link to="" className="text-green-700 menubar">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
            <ShoppingBasketIcon className="w-5 h-5" />
          </Link>
        </li>
        <Button className="rounded-full text-white bg-[#a18161]">Login</Button>
      </ul>
      <div className="md:hidden">
        <SideBar />
        {/* <AlignRightIcon className="text-[#453320] cursor-pointer" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
