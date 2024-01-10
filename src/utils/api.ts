import { Todo } from "@/types/todo";

const createURL = (path: string) => window.location.origin + path;

export const getTodos = async () => {
  const res = await fetch(
    new Request(createURL(`/api/todos`), {
      method: "GET",
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};

export const addTodo = async (todo: Partial<Todo>) => {
  const res = await fetch(
    new Request(createURL(`/api/todos`), {
      method: "POST",
      body: JSON.stringify({ todo }),
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};

export const updateTodo = async (todo: Partial<Todo>) => {
  const res = await fetch(
    new Request(createURL(`/api/todos/${todo.id}`), {
      method: "PATCH",
      body: JSON.stringify({ todo }),
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};
