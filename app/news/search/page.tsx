import { getNewsList } from "@/app/libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import NewsList from "@/app/components/NewsList";
import SearchField from "@/app/components/SearchField";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "@/app/news/page.module.css";
import { Barlow_Condensed } from "next/font/google";
import styles2 from "./page.module.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: params.q,
  });
  return (
    <>
      <Header />
      <section className={styles.news}>
        <div className={`inner ${styles.news_content}`}>
          <h2 className={`${styles.news_title} ${barlowCondensed.className}`}>
            News
          </h2>
          <SearchField />
          <div className={styles2.news_base}>
            {news.length === 0 ? (
              <p>検索結果がありません</p>
            ) : (
              <NewsList news={news} />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
