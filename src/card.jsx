import React from "react";
import logo from "./assets/insideroot.svg";
import { RxCross2 } from "react-icons/rx";

function Card() {
  return (
    <div className="w-72 min-h-[26rem] h-[26rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col">
      <h2 className="font-bold text-[10px]">Inside Root UI Components</h2>
      <p className="text-neutral-600 mt-2 text-[10px]">
        A collection of beautiful UI components, let's go on with it.
      </p>
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-1 text-[10px] mt-4 font-semibold shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
          <img src={logo} alt="logo" className="w-4 h-4" />
          Inside Root
          <RxCross2 />
        </button>
      </div>
      <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
        <div className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200">
          <div className="p-4 text-[10px] flex items-start"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
