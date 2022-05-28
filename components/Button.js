import { FC } from "react";

const Button = () => {
  return (
    <button
      className="relative group uppercase min-w-[16rem] p-[7px] font-dinw05Bold
        text-lg lg:text-sm
        w-72 lg:w-60
        "
    >
      <span className="border-gray-400 border-r border-l w-full absolute  left-0 h-[calc(50%-0.375rem)] border-t top-0"></span>
      <span className="border-gray-400 border-r border-l w-full absolute  left-0 h-[calc(50%-0.375rem)] border-b bottom-0"></span>
      <div className="relative overflow-hidden leading-[1.15] bg-valorant-red ">
        <div className="bg-[#0f1923] -left-[5%] -translate-x-full -skew-x-12 absolute w-[120%] top-0 group-hover:left-[110%] easy-out duration-300 h-[105%]"></div>
        <div className="relative">
          <div className="text-white px-[1.875rem] py-[1.1875rem] group-hover:text-white ">
            BUTTON!
          </div>
          <span
            className="absolute right-0 bottom-0 ease-in duration-200 bg-[#0f1923] group-hover:bg-white
            w-[6px] lg:w-1 
            h-[6px] lg:h-1
            "
          ></span>
        </div>
      </div>
    </button>
  );
};

export default Button;
