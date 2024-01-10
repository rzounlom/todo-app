import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

export const GET = async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany({});
  todos.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json({ data: todos });
};

export const POST = async (req: Request, res: Response) => {
  if (!req.body) {
    return NextResponse.next();
  }

  const { todo } = await req.json(); // Extract the text from the request body

  const newTodo = await prisma.todo.create({
    data: {
      text: todo.text, // Use the extracted text from the request body
      completed: false,
    },
  });

  return NextResponse.json({ data: newTodo });
};
