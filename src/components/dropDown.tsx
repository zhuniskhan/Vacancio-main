import React, { useState } from "react";
import Image from "next/image";

const Dropdown = () => {
  return (
    <div className="bg-third flex w-full h-full rounded-[10px]">
      <button className="flex w-full p-3 justify-between items-center">
        <p className="font-inter text-base font-semibold text-low">
          Place of Study
        </p>
        <Image src="/arrowDown.svg" alt="arrowDown" width={14} height={8} />
      </button>
    </div>
  );
};

export default Dropdown;
