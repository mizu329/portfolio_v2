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
import { ArrowRight } from "lucide-react";

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
        {/* <div className="bg-black"> */}
        <section className={`inner ${styles.fv}`}>
          <div className={styles.fv_content}>
            {/* <video
                className={styles.bgVideo}
                width="640"
                height="360"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/video/fv_movie.mp4" type="video/mp4" />
              </video> */}
            <h1
              className={`${styles.fv_title} ${barlowCondensed.className} leading-[1]`}
            >
              <SplitText text="Visionary" delayOffset={0.3} />
              <br />
              <SplitText text="Mate" delayOffset={0.8} />
            </h1>
            <p className={styles.fv_subtitle + " mt-[16px]!"}>
              ニーズを形にする、
              <br className="sm:hidden" />
              WEB制作とアプリ開発。
            </p>
            <div className={styles.fv_lead}>
              <p className="whitespace-nowrap">あなたのビジョンを、</p>
              <p className="whitespace-nowrap">デジタルの力で形にする。</p>
            </div>
          </div>
        </section>
        {/* </div> */}

        <div className="bg-black">
          <section className={`inner ${styles.news}`}>
            <SlideIn>
              <div className={styles.news_base}>
                <h2
                  className={`${styles.news_title} ${barlowCondensed.className}`}
                >
                  News
                </h2>
                <NewsList news={date.contents} />
                <div className={styles.news_button}>
                  <ButtonLink href="/news">View more</ButtonLink>
                </div>
              </div>
            </SlideIn>
          </section>
        </div>

        <div className="bg-black">
          <section className={`inner ${styles.concept}`}>
            <SlideIn>
              <div className={styles.concept_content}>
                <div className={styles.concept_content_left}>
                  <h2 className={`section_title ${barlowCondensed.className}`}>
                    Concept
                  </h2>
                  <h3>方針</h3>
                  <p className={styles.concept_text}>
                    デザイナー兼エンジニアとして、アプリ・Web・LP制作のデザインから実装まで幅広く承っています。
                    <br />
                    依頼者の描く理想をともに考え、デザインと技術の両面から最適な解決策を提案することを心がけています。
                    <br />
                    制作過程における「決めること」の多さは、ご依頼者様にとって大きな負担になりがちです。
                    <br />
                    だからこそ、私は「よき相談相手」として、具体的な提案を行い、意思決定をスムーズにサポートすることを心がけています。
                  </p>
                </div>

                <div className={styles.concept_content_right}>
                  <Image
                    src="/image/design.png"
                    alt=""
                    width={240}
                    height={240}
                  />
                </div>
              </div>
            </SlideIn>
          </section>
        </div>

        <div className="bg-black">
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
                    会社員として勤務しながら個人でもデザイナー、エンジニアとしてプロジェクトに参画するなどしています。
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
        </div>

        <div className="bg-black">
          <section className={`inner ${styles.service} pb-[160px]!`}>
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

        <section className="inner relative overflow-hidden flex items-center justify-center py-[160px]!">
          <SlideIn>
            <div
              className={
                "relative z-10 bg-white text-black py-[30px]! px-[50px]! rounded-lg " +
                styles.contactBox
              }
            >
              <a href="/contact" rel="noopener noreferrer">
                <h2 className={`section_title ${barlowCondensed.className}`}>
                  Contact
                </h2>
                <h3>お問い合わせ</h3>
                <p>制作のご依頼やご質問など、お気軽にお問い合わせください。</p>
                <p
                  className={`inline-flex w-full justify-end mt-[32px]! ${barlowCondensed.className}`}
                >
                  contact me
                  <ArrowRight />
                </p>
              </a>
            </div>
          </SlideIn>
        </section>
      </div>

      <Footer />
    </>
  );
}
