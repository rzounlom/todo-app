import { FC } from "react";
import { type Todo } from "@/types/todo";
import TodoRow from "../todo-card/TodoRow";

type TodoListProps = {
  todos: Todo[];
};

const todo: Todo = {
  id: 1,
  text: "Learn Vue.js 3",
  completed: true,
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="max-h-[368px] w-full border-black border-2">
      <TodoRow todo={todo} />
    </div>
  );
};

export default TodoList;
