import { Dispatch, FC, SetStateAction } from "react";
import { type Todo } from "@/types/todo";
import TodoRow from "../todo-card/TodoRow";
import Spinner from "../spinner/Spinner";

type TodoListProps = {
  todos: Todo[];
  activeTodoCount: number;
  loading?: boolean;
  fetchTodos: () => Promise<void>;
};

const TodoList: FC<TodoListProps> = ({
  todos,
  activeTodoCount,
  loading,
  fetchTodos,
}) => {
  if (loading) {
    return (
      <div className="h-[368px] md:h-[540px] w-full flex justify-center items-center mt-[16px] bg-[#E3E4F1] dark:bg-[#393A4B] rounded">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="h-[368px] md:h-[492px] max-h-[540px] w-full mt-[16px] bg-[#E3E4F1] dark:bg-[#393A4B] rounded overflow-auto shadow-2xl relative">
        {todos.length ? (
          todos.map((todo: Todo) => (
            <TodoRow todo={todo} key={todo.id} fetchTodos={fetchTodos} />
          ))
        ) : (
          <div className="h-full w-full flex justify-center items-center text-[30px] md:text-[40px]">
            No todos!
          </div>
        )}
      </div>
      <div className="w-[327px] md:w-[540px] h-[48px] flex justify-between items-center rounded bg-[#FFF] dark:bg-[#25273D] text-[#9495A5] px-6 mt-[1px] shadow-md md:hidden absolute">
        <div>{activeTodoCount} items left</div>
        <div className="hover:cursor-pointer">Clear Completed</div>
      </div>
    </>
  );
};

export default TodoList;
