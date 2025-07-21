import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`inner ${styles.header_content}`}>
        <h1 className={styles.header_title}>Visionary Mate</h1>
        <p className={styles.header_subtitle}>
          WEB関連で気になったトピックをシェアしています。
        </p>
      </div>
    </header>
  );
}
