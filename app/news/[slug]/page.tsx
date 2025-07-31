import { getNewsDetail } from "../../libs/microcms";
import Date from "../../components/Date";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";
import { Barlow_Condensed } from "next/font/google";
import ButtonLink from "../../components/ButtonLink";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const date = await getNewsDetail(params.slug);

  return (
    <>
      <Header />

      <section>
        <div className={`inner ${styles.news_content}`}>
          <h2 className={`${styles.news_title} ${barlowCondensed.className}`}>
            News
          </h2>
          <div className={styles.news_base}>
            <h1>{date.title}</h1>
            <p>
              <Date dateString={date.publishedAt} />
            </p>
            <div dangerouslySetInnerHTML={{ __html: date.body || "" }} />

            <div className={styles.news_button}>
              <ButtonLink href="/news">News一覧へ</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
