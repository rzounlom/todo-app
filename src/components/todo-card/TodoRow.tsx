import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { Todo } from "@/types/todo";
import { useTheme } from "next-themes";

type TodoRowProps = {
  todo: Todo;
};

const TodoRow: FC<TodoRowProps> = ({ todo }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const todoTextStyles = () => {
    let baseStyle = todo.completed ? "line-through" : "";
    let textColor;

    if (todo.completed) {
      textColor = resolvedTheme === "light" ? "#D1D2DA" : "#4D5067";
      return `text-[${textColor}] ${baseStyle}`;
    } else {
      return `text-[#494C6B] dark:text-[#C8CBE7] ${baseStyle}`;
    }
  };

  const getCheckIconSrc = () => {
    if (todo.completed) {
      return "images/checked.svg";
    } else {
      return resolvedTheme === "light"
        ? "images/unchecked-light.svg"
        : "images/unchecked-dark.svg";
    }
  };

  if (!hasMounted) {
    return null; // Return null if client side rendering is not done
  }

  return (
    <div className="w-full h-[48px] flex justify-between items-center rounded bg-[#FFF] dark:bg-[#25273D] px-5 mt-[1px] shadow-md">
      <div className="flex items-center">
        <div className="hover:cursor-pointer h-[20px] w-[20px] rounded-full">
          <Image
            src={getCheckIconSrc()}
            height={20}
            width={20}
            alt="check icon"
          />
        </div>
        <div className={`pl-5 ${todoTextStyles()}`}>{todo.text}</div>
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
