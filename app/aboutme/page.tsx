import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Barlow_Condensed } from "next/font/google";
import Image from "next/image";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default function page() {
  return (
    <>
      <Header />

      <section className={styles.aboutme}>
        <div className={`inner ${styles.aboutme_content}`}>
          <h2
            className={`${styles.aboutme_title} ${barlowCondensed.className}`}
          >
            About me
          </h2>

          <div></div>

          <div className={styles.skills}>
            <h3 className={barlowCondensed.className}>Skill</h3>
            <dl className={styles.skill_section}>
              <dt className={barlowCondensed.className}>Design</dt>
              <dd>
                <span className={styles.icon}>
                  <Image
                    src="/image/Figma.png"
                    alt="Figma"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/illustrator.png"
                    alt="Illustrator"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/photoshop.png"
                    alt="Photoshop"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
              </dd>
            </dl>
            <dl className={styles.skill_section}>
              <dt className={barlowCondensed.className}>Development</dt>
              <dd>
                <span className={styles.icon}>
                  <Image
                    src="/image/html.png"
                    alt="HTML"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/css.png"
                    alt="CSS"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/js.png"
                    alt="JavaScript"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/php.png"
                    alt="PHP"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/vercel.png"
                    alt="Vercel"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/nextjs.png"
                    alt="Next.js"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/mysql.png"
                    alt="MySQL"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/Github.png"
                    alt="GitHub"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/Wordpress.png"
                    alt="WordPress"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
                <span className={styles.icon}>
                  <Image
                    src="/image/Studio.png"
                    alt="Studio"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
              </dd>
            </dl>
            <dl className={styles.skill_section}>
              <dt className={barlowCondensed.className}>Editor</dt>
              <dd>
                <span className={styles.icon}>
                  <Image
                    src="/image/vscode.png"
                    alt="Visual Studio Code"
                    width={50}
                    height={0}
                    style={{ height: "auto" }}
                  />
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
