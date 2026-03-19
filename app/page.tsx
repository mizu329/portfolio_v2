import Image from "next/image";
import styles from "./page.module.css";
import { Barlow_Condensed } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import { TOP_NEWS_LIMIT } from "./constants";
import { getNewsList } from "./libs/microcms";
import ButtonLink from "./components/ButtonLink";
import SlideIn from "./components/SlideIn";
import SplitText from "./components/SplitText";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default async function Home() {
  const date = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return (
    <>
      <Header />
      <div>
        <section className={`inner ${styles.fv}`}>
          <div className={styles.fv_content}>
            <h1 className={`${styles.fv_title} ${barlowCondensed.className}`}>
              <SplitText text="Visionary" delayOffset={0.3} />
              <br />
              <SplitText text="Mate" delayOffset={0.8} />
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
              WEB開発、アプリ開発に取り組んでいます。
            </p>
            <div className={styles.fv_lead}>
              <p>開発者体験・</p>
              <p>UX体験の追求</p>
            </div>
          </div>
        </section>

        <section className={`inner ${styles.news}`}>
          <SlideIn>
            <div className={styles.news_base}>
              <h2 className={`${styles.news_title} ${barlowCondensed.className}`}>
                News
              </h2>
              <NewsList news={date.contents} />
              <div className={styles.news_button}>
                <ButtonLink href="/news">View more</ButtonLink>
              </div>
            </div>
          </SlideIn>
        </section>

        <section className={`inner ${styles.concept}`}>
          <SlideIn>
          <div className={styles.concept_content}>
            <div className={styles.concept_content_left}>
              <h2 className={`section_title ${barlowCondensed.className}`}>
                Concept
              </h2>
              <h3>方針</h3>
              <p className={styles.concept_text}>
                デザイナー兼エンジニアとして、日々の学びや気づきを整理し、アウトプットすることを目的としています。
                <br />
                実務や個人開発を通して得た知見を、記録として残しています。
              </p>
            </div>

            <div className={styles.concept_content_right}>
              <Image src="/image/design.png" alt="" width={240} height={240} />
            </div>
          </div>
          </SlideIn>
        </section>

        <section className={`inner ${styles.aboutme}`}>
          <SlideIn>
          <div className={styles.aboutme_content}>
            <div className={styles.aboutme_content_left}>
              <Image
                src="/image/photo of me.png"
                alt=""
                width={264}
                height={298}
                unoptimized
                style={{ background: "transparent", objectFit: "contain" }}
              />
            </div>
            <div className={styles.aboutme_content_right}>
              <h2 className={`section_title ${barlowCondensed.className}`}>
                About me
              </h2>
              <h3>私について</h3>
              <p>
                デザインとフルスタック開発を軸に活動しています。
                <br />
                新しい技術や表現に触れながら、より良い体験づくりを追求しています。
                <br />
                <br />
                Github:
                <a
                  href="https://github.com/miii329"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/miii329
                </a>
              </p>
            </div>
          </div>
          </SlideIn>
        </section>

        <section className={`inner ${styles.service}`}>
          <SlideIn>
          <h2 className={`section_title ${barlowCondensed.className}`}>
            Service
          </h2>
          <h3>できること</h3>

          <ul className={styles.service_list}>
            <li>
              <Image
                src="/image/HPLP.png"
                alt="HP/LP/アプリ制作"
                width={300}
                height={200}
              />
              <p>HP/LP/アプリ制作</p>
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
          </SlideIn>
        </section>
      </div>

      <Footer />
    </>
  );
}
