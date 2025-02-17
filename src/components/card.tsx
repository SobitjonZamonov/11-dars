import React from "react";
import { request } from "../config/request";

export const Card = ({ todo, setTodos, todos }) => {
  const deleteTodo = async (id) => {
    try {
      await request.delete(`/todos/${id}`);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Ochirishda xatolik:", error.message);
    }
  };

  const updateTodo = async (id, oldTitle) => {
    const newTitle = prompt("Yangi nomni kiriting:", oldTitle);
    if (!newTitle) return;

    try {
      const res = await request.put(`/todos/${id}`, {
        title: newTitle,
        completed: true,
      });

      setTodos(todos.map((t) => (t.id === id ? res.data : t)));
    } catch (error) {
      console.error("Yangilashda xatolik:", error.message);
    }
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
      <button onClick={() => updateTodo(todo.id)}>edit</button>
    </div>
  );
};
