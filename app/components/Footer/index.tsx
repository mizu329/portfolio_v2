import { Barlow_Condensed } from "next/font/google";
import styles from "./index.module.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default function Footer() {
  return (
    <footer className={styles.footer + " pt-[100px]!"}>
      <div className={`inner ${styles.footer_content}`}>
        <div className="flex flex-col justify-between mt-24 ">
          <h1
            className={`${styles.footer_title} text-[72px] leading-none ${barlowCondensed.className}`}
          >
            Visionary
            <br />
            Mate
          </h1>
          <ul
            className={`text-end ${styles.footer_list} ${barlowCondensed.className}`}
          >
            <li>
              <p>Shaping your Vision.</p>
            </li>
            <li>
              <p>Your visionary partner in digital creation.</p>
            </li>
          </ul>
        </div>

        <p className={styles.footer_text}>
          © 2025 Visionary Mate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
