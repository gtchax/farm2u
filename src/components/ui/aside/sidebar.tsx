import Logo from "../../logo";
import { Button } from "../button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import Content from "./content";
import { AlignRightIcon } from "lucide-react";

const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="mt-3 hover:bg-transparent">
          {" "}
          <AlignRightIcon className="text-[#453320] cursor-pointer" />
          {/* <MenuIcon className="h-6 w-6 text-white" /> */}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[#966d43] border-none text-white bg-opacity-90 overflow-y-scroll no-scrollbar"
      >
        <SheetHeader>
          <SheetTitle className="py-4 ">
            <Logo className="text-white" />
          </SheetTitle>
          <SheetDescription><Content /></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
