import styles from "./footer.module.css";

export default function Footer({ completedItem, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}> Completed Todos is : {completedItem}</span>
      <span> Total Todos is : {totalTodos}</span>
    </div>
  );
}
