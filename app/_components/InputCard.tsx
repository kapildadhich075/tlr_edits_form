import Image from "next/image";
import { ChangeEvent } from "react";

interface InputCardProps {
  // props
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  checked: boolean;
  para: string;
  image: string;
  onClick?: () => void;
}

export const InputCard = ({
  id,
  name,
  value,
  onChange,
  label,
  checked,
  para,
  image,
  onClick,
}: InputCardProps) => {
  return (
    <div
      className={`
      mb-4 container mx-auto p-4 bg-[#f2f2f2] rounded-lg h-auto flex flex-col justify-center items-center gap-5
        ${checked ? " bg-amber-100 shadow-inner" : "bg-gray-100 shadow-xl"}
        
        `}
      data-testid="input-card"
      onClick={onClick}
    >
      <div className="flex items-center flex-col text-center gap-5">
        <Image src={image} alt="video" width={60} height={60} />
        <label
          htmlFor="orderType-video"
          className="ml-3 text-gray-700 text-lg font-semibold"
        >
          {label}
        </label>
        <p className="text-gray-500 text-sm">{para}</p>
      </div>

      <div className=" ">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="form-radio h-4 w-4 text-indigo-500 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};
