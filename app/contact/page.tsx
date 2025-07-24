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

      <section className={styles.contact}>
        <div className={`inner ${styles.contact_content}`}>
          <h2
            className={`${styles.contact_title} ${barlowCondensed.className}`}
          >
            Contact
          </h2>
        </div>
      </section>

      <p className={styles.text}>Coming soon...</p>
      <Footer />
    </>
  );
}
