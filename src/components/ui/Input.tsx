"use client";

import { ChangeEvent, FC, KeyboardEvent } from "react";

type InputProps = {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: KeyboardEvent<HTMLInputElement>) => void;
};
const Input: FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  onSubmit,
}) => {
  // submit on enter
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  return (
    <input
      className="w-full h-[48px] rounded bg-[#FFF]shadow-md"
      name={name}
      value={value}
      placeholder={placeholder ? placeholder : "Submit..."}
      required
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
