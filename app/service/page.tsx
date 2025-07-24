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

      <section className={styles.service}>
        <div className={`inner ${styles.service_content}`}>
          <h2
            className={`${styles.service_title} ${barlowCondensed.className}`}
          >
            Service
          </h2>
        </div>
      </section>

      <p className={styles.text}>Coming soon...</p>
      <Footer />
    </>
  );
}
