import styles from "./index.module.css";
import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <h1 className={`${styles.header_title} ${barlowCondensed.className}`}>
          <Link href="/">Visionary Mate</Link>
        </h1>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/news">ニュース</Link>
            </li>
            <li>
              <Link href="/works">制作事例</Link>
            </li>
            <li>
              <Link href="/service">事業内容</Link>
            </li>
            <li>
              <Link href="/aboutme">運営者情報</Link>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
