import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`inner ${styles.footer_content}`}>
        <p className={styles.footer_text}>
          © 2025 Visionary Mate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
