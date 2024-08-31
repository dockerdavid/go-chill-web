import styles from './stats.module.css'

type StatsComponentProps = {
  title: string;
  result: string;
};

const StatsComponent = ({ title, result }: StatsComponentProps) => {
  return (
    <div className={styles.statsComponentContainer}>
      <span className={styles.statsComponentTexts}>{title}</span>
      <span className={styles.statsComponentTexts}>{result}</span>
    </div>
  );
};

export default StatsComponent;
