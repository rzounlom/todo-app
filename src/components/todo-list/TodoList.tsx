import { FC } from "react";
import { type Todo } from "@/types/todo";
import TodoRow from "../todo-card/TodoRow";

type TodoListProps = {
  todos: Todo[];
  activeTodoCount: number;
};

const todo: Todo = {
  id: 1,
  text: "Learn Vue.js 3",
  completed: true,
};

const TodoList: FC<TodoListProps> = ({ todos, activeTodoCount }) => {
  return (
    <div className="max-h-[368px] h-[auto] w-full mt-[16px] bg-[#E3E4F1] dark:bg-[#393A4B] rounded overflow-auto shadow-2xl">
      {todos.map((todo: Todo) => (
        <TodoRow todo={todo} key={todo.id} />
      ))}
      <div className="w-full h-[48px] flex justify-between items-center rounded bg-[#FFF] dark:bg-[#25273D] text-[#9495A5] px-6 mt-[1px] shadow-md md:hidden">
        <div>{activeTodoCount} items left</div>
        <div className="hover:cursor-pointer">Clear Completed</div>
      </div>
    </div>
  );
};

export default TodoList;
