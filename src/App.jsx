import React, { useEffect, useState } from "react";
import { request } from "./config/request";
import { Card } from "./components/card";

function App() {
  const [todos, setTodos] = useState([]);

  React.useEffect(() => {
    request.get("/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error("Xatolik:", err.message));
  }, []);

  const setData = () => {
    request.get('/todos')
    .then(res => Setusers(res.data))
  }


  return (
    <div>
      <h2>To-do ro‘yxati</h2>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Card key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
}

export default App;
