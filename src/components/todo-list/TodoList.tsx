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
    <div className="max-h-[368px] h-[auto] w-full mt-[16px] bg-[#E3E4F1] rounded overflow-auto shadow-2xl">
      {todos.map((todo: Todo) => (
        <TodoRow todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
