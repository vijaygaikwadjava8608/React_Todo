import styles from "./todoItems.module.css";

export default function TodoItems({ item, todos, setTodos }) {
  function deleteHandle(item) {
    console.log("delete function called : ", item);
    // fitering out new list without specificic which want to delete
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(item) {
    const newArray = todos.map((todo) =>
      todo.name === item ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log("todos : ", todos);
  }
  const className = item.done ? styles.completion : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <button
          className={styles.deleteButton}
          onClick={() => deleteHandle(item)}
        >
          x
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
