"use client";

import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import { addTodo, deleteCompletedTodos, getTodos } from "@/utils/api";

import Header from "@/components/header/Header";
import Input from "@/components/ui/Input";
import { Todo } from "@/types/todo";
import TodoFooter from "@/components/todo-footer/TodoFooter";
import TodoList from "@/components/todo-list/TodoList";

const Home: FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([] as Todo[]);
  const [filteredTodos, setFilteredTodos] = useState(todos as Todo[]);
  const [loading, setLoading] = useState(true);
  const [activeTodoCount, setActiveTodoCount] = useState(0);

  const [activeTab, setActiveTab] = useState<"all" | "active" | "completed">(
    "all"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  const handleSubmit = async (e: KeyboardEvent<HTMLInputElement>) => {
    setLoading(true);
    e.preventDefault();
    const todo: Partial<Todo> = {
      text: newTodo.trim(),
    };

    try {
      await addTodo(todo);
      await fetchTodos();
    } catch (error) {
      if (error) {
        console.log({ error });
      }
    } finally {
      setLoading(false);
      setNewTodo("");
    }
  };

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const { data } = await getTodos();
      setTodos(data);
      setFilteredTodos(data);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  const clearCompletedTodos = async () => {
    setLoading(true);
    const completedTodos = todos
      .filter((todo) => todo.completed)
      .map((todo) => todo.id.toString());

    try {
      const { data } = await deleteCompletedTodos(completedTodos);
      console.log("delete todo data: ", { data });
      await fetchTodos();
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleFilterTodos = () => {
      switch (activeTab) {
        case "active":
          return todos.filter((todo) => !todo.completed);
        case "completed":
          return todos.filter((todo) => todo.completed);
        default:
          return todos;
      }
    };

    setFilteredTodos(handleFilterTodos());
    setActiveTodoCount(todos.filter((todo) => !todo.completed).length);
  }, [activeTab, todos]);

  useEffect(() => {
    fetchTodos();
  }, []);

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
        <TodoList
          todos={filteredTodos}
          activeTodoCount={activeTodoCount}
          loading={loading}
          fetchTodos={fetchTodos}
        />
        <TodoFooter
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          todoLength={activeTodoCount}
          loading={loading}
          clearCompletedTodos={clearCompletedTodos}
        />
      </div>
    </div>
  );
};

export default Home;
