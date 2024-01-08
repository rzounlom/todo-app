"use client";

import { ChangeEvent, FC, KeyboardEvent, useState } from "react";

import Header from "@/components/header/Header";
import Input from "@/components/ui/Input";

const Home: FC = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(newTodo);
    setNewTodo("");
  };
  return (
    <div
      className={`container-fluid flex items-center flex-col h-screen bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')] md:dark:bg-[url('/images/bg-desktop-dark.jpg')] bg-no-repeat bg-[length:100%_30%]`}
    >
      <Header />
      <div className="w-[327px] h-[550px] border-2 border-black">
        <Input
          name="todo-input"
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={newTodo}
          placeholder="Create a new todo..."
        />
      </div>
    </div>
  );
};

export default Home;
