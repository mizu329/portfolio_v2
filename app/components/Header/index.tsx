import styles from "./index.module.css";
import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";
import Menu from "../Menu";
import { Date } from "./components/Date";

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

        <Menu />
      </div>
    </header>
  );
}
