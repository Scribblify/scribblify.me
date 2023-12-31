import { Languages, Moon } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 w-[80%] m-auto mt-[50px] h-[65px] bg-[#fff] rounded-[103px] shadow">
      <div className="flex items-center gap-2 select-none cursor-pointer">
        <Image
          className="w-[40.07px] h-10"
          //   src="https://avatars.githubusercontent.com/u/150591042?s=48&v=4"
          src="/logo.png"
          width={40}
          height={40}
          alt="Picture of the author"
        />
        <p className="text-neutral-600 text-xl font-bold">Scribblify</p>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex gap-4">
          <p className="text-neutral-600 text-base font-medium cursor-pointer">
            Tutorial
          </p>
          <p className="text-neutral-600 text-base font-medium cursor-pointer">
            Prices
          </p>
          <p className="text-neutral-600 text-base font-medium cursor-pointer">
            Gallery
          </p>
        </div>

        <Moon className="cursor-pointer" />

        <Languages className="cursor-pointer" />

        <div className="cursor-pointer w-fit h-[43px] px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-base font-bold">Join</div>
        </div>
        <div className="cursor-pointer w-fit h-[43px] px-6 py-3 bg-white rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-600 text-base font-bold">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
