import Navbar from "@/components/navbar";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-[649px] m-auto text-center mt-[200px]">
        <span className="text-6xl font-bold leading-[73.73px]">
          Write your story now on
        </span>
        <span className="text-purple-400 text-6xl font-bold leading-[73.73px]">
          {" "}
          Scribblify
        </span>
      </div>
    </div>
  );
};

export default Home;
