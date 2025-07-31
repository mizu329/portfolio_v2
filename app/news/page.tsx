import styles from "./page.module.css";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Barlow_Condensed } from "next/font/google";
import { getNewsList } from "../libs/microcms";
import Link from "next/link";
import Date from "../components/Date";
import Category from "../components/Category";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

const limit = 10;

export default async function Page() {
  // microCMSから記事一覧を取得
  const newsList = await getNewsList({ limit });
  console.info("News List:", newsList);

  return (
    <>
      <Header />

      <section className={styles.news}>
        <div className={`inner ${styles.news_content}`}>
          <h2 className={`${styles.news_title} ${barlowCondensed.className}`}>
            News
          </h2>
          <ul className={styles.news_list}>
            {newsList.contents.map((article) => (
              <li key={article.id} className={styles.news_item}>
                <Link href={`/news/${article.id}`}>
                  <div className={styles.news_image}>
                    {article.thumbnail ? (
                      <Image
                        src={article.thumbnail.url}
                        alt={article.title}
                        className={styles.news_image}
                        width={300}
                        height={200}
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <Image
                        src="/image/noimage.jpg"
                        alt="No Image"
                        className={styles.news_image}
                        width={300}
                        height={200}
                        style={{ objectFit: "contain" }}
                      />
                    )}
                  </div>

                  <dl className={styles.news_wrapper}>
                    <dt>
                      <h3>{article.title}</h3>
                    </dt>
                    <dd>
                      <span className={styles.news_category}>
                        <Category categories={article.categories} />
                      </span>
                    </dd>
                    <dd>
                      <span>
                        <Date date={article.publishedAt} />
                      </span>
                    </dd>
                  </dl>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
