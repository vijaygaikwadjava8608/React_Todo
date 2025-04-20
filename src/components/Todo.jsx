import { useState } from "react";
import Form from "./Form";
import TodoItems from "./TodoItems";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedItems = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <>
      <div>
        {/*// here we will feed todos */}
        <Form todos={todos} setTodos={setTodos} />{" "}
        {/*// pass it here to display list */}
        <TodoList todos={todos} setTodos={setTodos}></TodoList>
        <Footer completedItem={completedItems} totalTodos={totalTodos} />
      </div>
    </>
  );
}
