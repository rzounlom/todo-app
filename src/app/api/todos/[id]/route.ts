import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

export const PATCH = async (req: Request, res: Response) => {
  if (!req.body) {
    return NextResponse.next();
  }

  const { todo } = await req.json(); // Extract the text from the request body

  const updatedTodo = await prisma.todo.update({
    where: {
      id: todo.id,
    },
    data: {
      completed: todo.completed,
    },
  });

  return NextResponse.json({ data: updatedTodo });
};
