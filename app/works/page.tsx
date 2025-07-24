import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default function page() {
  return (
    <>
      <Header />
      <section className={styles.works}>
        <div className={`inner ${styles.works_content}`}>
          <h2 className={`${styles.works_title} ${barlowCondensed.className}`}>
            Works
          </h2>
        </div>
      </section>
      <p className={styles.text}>Coming soon...</p>
      <Footer />
    </>
  );
}
