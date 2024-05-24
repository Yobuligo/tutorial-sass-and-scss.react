import styles from "./Lesson_03.module.scss";

export const Lesson_03: React.FC = () => {
  return (
    <>
      <div className={styles.error}>Normal error</div>
      <div className={styles.criticalError}>Critical error</div>
    </>
  );
};
