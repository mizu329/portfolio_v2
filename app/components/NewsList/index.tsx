import Image from "next/image";
import styles from "./index.module.css";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import Category from "../Category";
import Date from "../Date";
import ButtonLink from "../ButtonLink";
import { getNewsList } from "../../libs/microcms";
import { TOP_NEWS_LIMIT } from "../../constants";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

// const date: { contents: News[] } = {
//   contents: [
//     {
//       id: "1",
//       title: "タイトル1",
//       description: "これはニュース記事の説明です。最新の情報をお届けします。",
//       category: { name: "カテゴリー1" },
//       publishedAt: "2023-10-01T00:00:00Z",
//       createdAt: "2023-10-01T00:00:00Z",
//     },
//     {
//       id: "2",
//       title: "タイトル2",
//       description: "これはニュース記事の説明です。最新の情報をお届けします。",
//       category: { name: "カテゴリー2" },
//       publishedAt: "2023-10-02T00:00:00Z",
//       createdAt: "2023-10-02T00:00:00Z",
//     },
//   ],
// };

export default async function NewsList() {
  const newsList = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={`inner ${styles.news}`}>
        <div className={styles.news_base}>
          <h2 className={`${styles.news_title} ${barlowCondensed.className}`}>
            News
          </h2>
          <ul className={styles.news_list}>
            {newsList.contents.map((article) => (
              <li key={article.id} className={styles.news_item}>
                <Link href={`/news/${article.id}`} className={styles.link}>
                  {article.thumbnail ? (
                    <Image
                      src={article.thumbnail.url}
                      alt={article.title}
                      className={styles.news_image}
                      width={168}
                      height={100}
                    />
                  ) : (
                    <Image
                      src="/image/noimage.jpg"
                      alt="No Image"
                      className={styles.news_image}
                      width={168}
                      height={100}
                    />
                  )}

                  <dl>
                    <dt>
                      <h3>{article.title}</h3>
                    </dt>
                    <dd>
                      <span>
                        <Category category={article.category} />
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
          <ButtonLink href="/news">View more</ButtonLink>
        </div>
      </section>
    </>
  );
}
