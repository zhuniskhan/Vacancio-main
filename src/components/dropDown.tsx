import React from "react";
import Image from "next/image";

const Dropdown = () => {
  return (
    <div className="bg-third flex items-center justify-between w-full h-[50px] rounded-[10px] p-5">
      <p className="font-inter text-base font-semibold text-low">
        Place of Study
      </p>
      <button className="flex items-center">
        <Image src="/arrowDown.svg" alt="arrowDown" width={14} height={8} />
      </button>
    </div>
  );
};

export default Dropdown;
