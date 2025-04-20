import TodoItems from "./TodoItems";
import styles from "./todoList.module.css";

export default function TodoList({ todos, setTodos }) {
  //Slice is used to create new object list here we dont want to alter orginal list
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
