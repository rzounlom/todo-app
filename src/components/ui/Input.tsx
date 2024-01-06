"use client";

import { ChangeEvent, FC, useState } from "react";

type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const input: FC<InputProps> = ({ onChange, value }) => {
  return (
    <input
      name="todo-input"
      value={value}
      placeholder="Create a new todo..."
      required
      onChange={onChange}
    />
  );
};

export default input;
