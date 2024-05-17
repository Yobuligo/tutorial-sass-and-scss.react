import styles from "./Lesson_01.module.scss";

export const Lesson_01: React.FC = () => {
  return (
    <>
      <div className={styles.body}>Hello World</div>
      <div className={styles.warningMessage}>Warning message</div>
      <div className={styles.errorMessage}>Error message</div>
      <div className={styles.infoMessage}>Info message</div>
    </>
  );
};
