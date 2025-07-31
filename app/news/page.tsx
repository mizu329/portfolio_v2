import styles from "./page.module.css";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Barlow_Condensed } from "next/font/google";
import { getNewsDetail } from "../libs/microcms";
import Link from "next/link";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

// const date = {
//   contents: [
//     {
//       id: 1,
//       title: "タイトル1",
//       description: "これはニュース記事の説明です。最新の情報をお届けします。",
//       image: "/image/news1.jpg",
//     },
//     {
//       id: 2,
//       title: "タイトル2",
//       description: "これはニュース記事の説明です。最新の情報をお届けします。",
//       image: "/image/news2.jpg",
//     },
//   ],
// };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // microCMSから記事一覧を取得
  const newsDetail = await getNewsDetail(slug, { limit: 10 });

  return (
    <>
      <Header />

      <section className={styles.news}>
        <div className={`inner ${styles.news_content}`}>
          <h2 className={`${styles.news_title} ${barlowCondensed.className}`}>
            News
          </h2>
          <ul className={styles.news_list}>
            {newsDetail.contents.map((article) => (
              <li key={article.id} className={styles.news_item}>
                <Link href={`/news/${article.id}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    className={styles.news_image}
                    width={500}
                    height={300}
                  />
                  <h4 className={styles.news_item_title}>{article.title}</h4>
                  <p className={styles.news_item_description}>
                    {article.description}
                  </p>
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
