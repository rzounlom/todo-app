import { FC } from "react";
import Image from "next/image";
import { Todo } from "@/types/todo";

type TodoRowProps = {
  todo: Todo;
};

const TodoRow: FC<TodoRowProps> = ({ todo }) => {
  return (
    <div className="w-full h-[48px] flex justify-between items-center rounded bg-[#FFF] dark:bg-[#25273D] px-5 mt-[1px] shadow-md">
      <div className="flex items-center">
        <div className="hover:cursor-pointer h-[20px] w-[20px] rounded-full">
          <Image
            src={todo.completed ? "images/checked.svg" : "images/unchecked.svg"}
            height={20}
            width={20}
            alt="check icon"
          />
        </div>
        <div className="pl-5">{todo.text}</div>
      </div>

      <div className="hover:cursor-pointer">
        <Image
          src={"/images/icon-cross.svg"}
          height={20}
          width={20}
          alt="cross icon"
        />
      </div>
    </div>
  );
};

export default TodoRow;
