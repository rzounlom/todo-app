"use client";

import { ChangeEvent, FC } from "react";

type InputProps = {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: Function;
};

const input: FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  onSubmit,
}) => {
  // submit on enter
  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder ? placeholder : "Submit..."}
      required
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default input;
