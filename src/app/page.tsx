"use client";

import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";

import Header from "@/components/header/Header";
import Input from "@/components/ui/Input";
import TodoFooter from "@/components/todo-footer/TodoFooter";
import TodoList from "@/components/todo-list/TodoList";
import { defaultTodos } from "@/data/todos";

const Home: FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  const [activeTab, setActiveTab] = useState<"all" | "active" | "completed">(
    "all"
  );
  const [activeTodoCount, setActiveTodoCount] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(newTodo);
    setNewTodo("");
  };

  useEffect(() => {
    const handleFilterTodos = () => {
      switch (activeTab) {
        case "active":
          return defaultTodos.filter((todo) => !todo.completed);
        case "completed":
          return defaultTodos.filter((todo) => todo.completed);
        default:
          return defaultTodos;
      }
    };

    setTodos(handleFilterTodos());
    setActiveTodoCount(defaultTodos.filter((todo) => !todo.completed).length);
  }, [activeTab]);

  return (
    <div
      className={`container-fluid flex items-center flex-col h-screen bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')] md:dark:bg-[url('/images/bg-desktop-dark.jpg')] bg-no-repeat bg-[length:100%_30%] bg-[#FAFAFA] dark:bg-[#171823]`}
    >
      <Header />
      <div className="w-[327px] md:w-[540px] h-[550px]">
        <Input
          name="todo-input"
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={newTodo}
          placeholder="Create a new todo..."
        />
        <TodoList todos={todos} activeTodoCount={activeTodoCount} />
        <TodoFooter
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          todoLength={activeTodoCount}
        />
      </div>
    </div>
  );
};

export default Home;
