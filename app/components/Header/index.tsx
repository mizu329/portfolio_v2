import styles from "./index.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <h1 className={styles.header_title}>Visionary Mate</h1>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">ニュース</Link>
            </li>
            <li>
              <Link href="/">制作事例</Link>
            </li>
            <li>
              <Link href="/">事業内容</Link>
            </li>
            <li>
              <Link href="/">運営者情報</Link>
            </li>
            <li>
              <Link href="/">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
