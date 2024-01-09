import { FC } from "react";
import { type Todo } from "@/types/todo";
import TodoRow from "../todo-card/TodoRow";
import Spinner from "../spinner/Spinner";

type TodoListProps = {
  todos: Todo[];
  activeTodoCount: number;
  loading?: boolean;
};

const TodoList: FC<TodoListProps> = ({ todos, activeTodoCount, loading }) => {
  if (loading) {
    return (
      <div className="min-h-[368px] w-full flex justify-center items-center mt-[16px] bg-[#E3E4F1] dark:bg-[#393A4B] rounded">
        <Spinner />
      </div>
    );
  }

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
