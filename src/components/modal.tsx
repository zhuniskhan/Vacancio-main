import React from "react";
import Image from "next/image";

const Modal = ({ isVisible, onClose, children }: any) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col bg-white p-2 rounded-[10px] w-[760px] h-[436px]">
        <div className="flex justify-end pr-10 pt-10">
          <button className="flex w-4 justify-end" onClick={() => onClose()}>
            <Image src="/Vector.svg" alt="x" width={16} height={16} />
          </button>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
