import Image from "next/image";
import styles from "./index.module.css";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

type News = {
  id: string;
  title: string;
  description: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const date: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "タイトル1",
      description: "これはニュース記事の説明です。最新の情報をお届けします。",
      category: { name: "カテゴリー1" },
      publishedAt: "2023-10-01T00:00:00Z",
      createdAt: "2023-10-01T00:00:00Z",
    },
    {
      id: "2",
      title: "タイトル2",
      description: "これはニュース記事の説明です。最新の情報をお届けします。",
      category: { name: "カテゴリー2" },
      publishedAt: "2023-10-02T00:00:00Z",
      createdAt: "2023-10-02T00:00:00Z",
    },
  ],
};

export default function NewsList() {
  return (
    <>
      <section className={styles.news}>
        <div className={`inner ${styles.news_base}`}>
          <h2 className={`${styles.news_title} ${barlowCondensed.className}`}>
            News
          </h2>
          <ul className={styles.news_list}>
            {date.contents.map((article) => (
              <li key={article.id} className={styles.news_item}>
                <Image
                  src="/image/news1.jpg"
                  alt={article.title}
                  className={styles.news_image}
                  width={500}
                  height={300}
                />
                <h4 className={styles.news_item_title}>{article.title}</h4>
                <p className={styles.news_item_description}>
                  {article.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
