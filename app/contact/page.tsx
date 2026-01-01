import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Barlow_Condensed } from "next/font/google";
import ContactForm from "../components/ContactForm";

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
          <div className={styles.form_base}>
            <p className={styles.contact_description}>
              ご質問、ご相談は下記フォームよりお問い合わせください。
              <br />
              内容確認後、ご連絡致します。
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
