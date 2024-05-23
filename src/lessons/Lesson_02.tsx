import styles from "./Lesson_02.module.scss";

export const Lesson_02: React.FC = () => {
  return (
    <>
      <div className={styles.h1}>
        <h1>Test</h1>
      </div>
      <div className={styles.newContainer}>New Container</div>
      <button className={styles.button}>My Button</button>
    </>
  );
};
