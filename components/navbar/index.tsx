import { Languages, Moon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconRenderer } from "../ui/icon-renderer";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 w-[80%] m-auto mt-[50px] h-[65px] bg-[#fff] rounded-[103px] shadow">
      <div className="flex items-center gap-2 select-none cursor-pointer">
        <Image
          className="w-[30px] h-[30px]"
          //   src="https://avatars.githubusercontent.com/u/150591042?s=48&v=4"
          src="/logo.png"
          width={40}
          height={40}
          alt="Picture of the author"
        />
        <p className="text-sm font-bold">Scribblify</p>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex">
          <Button variant={"link"}>Tutorial</Button>
          <Button variant={"link"}>Prices</Button>
          <Button variant={"link"}>Gallery</Button>
        </div>

        <IconRenderer>
          <Moon className="cursor-pointer" />
        </IconRenderer>

        <IconRenderer>
          <Select>
            <SelectTrigger className="w-fit border-none">
              <Languages className="cursor-pointer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="chinese">Chinese</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="russian">Russian</SelectItem>
              <SelectItem value="arabic">Arabic</SelectItem>
              <SelectItem value="portuguese">Portuguese</SelectItem>
              <SelectItem value="malay">Malay</SelectItem>
              <SelectItem value="french">French</SelectItem>
              <SelectItem value="german">German</SelectItem>
            </SelectContent>
          </Select>
        </IconRenderer>

        <Button>Join</Button>
      </div>
    </div>
  );
};

export default Navbar;
