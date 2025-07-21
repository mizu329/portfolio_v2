import Image from "next/image";
import styles from "./page.module.css";
import { Barlow_Condensed } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.fv}>
        <div className={`inner ${styles.fv_content}}`}>
          <h1 className={`${styles.fv_title} ${barlowCondensed.className}`}>
            Visionary
            <br />
            Mate
          </h1>
          <video
            className={styles.bgVideo}
            width="640"
            height="360"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video/fv_movie.mp4" type="video/mp4" />
          </video>
          <p className={styles.fv_subtitle}>
            WEB関連で気になったトピックをシェアしています。
          </p>
          <div className={styles.fv_lead}>
            <p>開発者体験・</p>
            <p>UX体験の追求</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2>News</h2>
          <ul>
            {/* {Date.contents.map((article) => (
              <li key={article.id}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                />
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </li>
            ))} */}
            <li>
              <Image></Image>
              <h4>タイトル</h4>
              <p>タイトル</p>
            </li>
          </ul>
        </div>
      </section>

      <section className={`inner ${styles.concept}`}>
        <div className={styles.concept_content}>
          <div className={styles.concept_content_left}>
            <h2 className={`section_title ${barlowCondensed.className}`}>
              Concept
            </h2>
            <h3>方針</h3>
            <p>
              デザイナー兼エンジニアとして、情報収集の一環として備忘録的に記録しています。
            </p>
          </div>

          <div className={styles.concept_content_right}>
            <Image src="/image/design.png" alt="" width={240} height={240} />
          </div>
        </div>
      </section>

      <section className={`inner ${styles.aboutme}`}>
        <div className={styles.aboutme_content}>
          <div className={styles.aboutme_content_left}>
            <Image
              src="/image/photo of me.png"
              alt=""
              width={310}
              height={350}
            />
          </div>
          <div className={styles.aboutme_content_right}>
            <h2 className={`section_title ${barlowCondensed.className}`}>
              About me
            </h2>
            <h3>私について</h3>
            <p>
              デザイナー兼エンジニアとして、情報収集の一環として備忘録的に記録しています。
            </p>
          </div>
        </div>
      </section>

      <section className={`inner ${styles.service}`}>
        <h2 className={`section_title ${barlowCondensed.className}`}>
          Service
        </h2>
        <h3>事業内容</h3>

        <ul className={styles.service_list}>
          <li>
            <Image
              src="/image/HPLP.png"
              alt="HP/LP制作"
              width={300}
              height={200}
            />
            <p>HP/LP制作</p>
          </li>
          <li>
            <Image
              src="/image/Banner.png"
              alt="バナー制作"
              width={300}
              height={200}
            />
            <p>バナー制作</p>
          </li>
          <li>
            <Image
              src="/image/UIUX.png"
              alt="UIUX改善"
              width={300}
              height={200}
            />
            <p>UIUX改善</p>
          </li>
          <li>
            <Image
              src="/image/Maintenance.png"
              alt="保守運用管理"
              width={300}
              height={200}
            />
            <p>保守運用管理</p>
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
