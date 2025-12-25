import { getNewsDetail } from "../../libs/microcms";
import Date from "../../components/Date";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";
import { Barlow_Condensed } from "next/font/google";
import ButtonLink from "../../components/ButtonLink";
import Image from "next/image";
import Category from "../../components/Category";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = await getNewsDetail(slug);

  return (
    <>
      <Header />

      <section>
        <div className={`inner ${styles.news_content}`}>
          <h2 className={`${styles.news_title} ${barlowCondensed.className}`}>
            News
          </h2>
          <div className={styles.news_base}>
            <div className={styles.news_image}>
              {article.thumbnail ? (
                <Image
                  src={article.thumbnail.url}
                  alt={article.title}
                  fill
                  style={{ objectFit: "contain" }} // or "cover"
                  sizes="(max-width: 768px) 100%, 768px"
                />
              ) : (
                <Image
                  src="/image/noimage.jpg"
                  alt="No Image"
                  className={styles.news_image}
                  fill
                  style={{ objectFit: "contain" }} // or "cover"
                  sizes="(max-width: 768px) 100%, 768px"
                />
              )}
            </div>
            <h1>{article.title}</h1>
            <span className={styles.news_category}>
              <Category categories={article.categories} />
            </span>
            <p>
              <Date date={article.publishedAt} />
            </p>
            <div dangerouslySetInnerHTML={{ __html: article.body || "" }} />

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
