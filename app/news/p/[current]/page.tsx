import styles from "../../page.module.css";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Barlow_Condensed } from "next/font/google";
import { getNewsList } from "@/app/libs/microcms";
import Link from "next/link";
import Date from "@/app/components/Date";
import Category from "@/app/components/Category";
import SearchField from "@/app/components/SearchField";
import SlideIn from "@/app/components/SlideIn";
import Pagination from "@/app/components/Pagination";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

const limit = 10;

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  const current = parseInt((await params).current, 10);

  // microCMSから記事一覧を取得
  const newsList = await getNewsList({
    limit,
    offset: (current - 1) * limit,
  });

  return (
    <>
      <Header />
      <section className={styles.news}>
        <div className={`inner ${styles.news_content}`}>
          <SlideIn>
          <h2 className={`${styles.news_title} ${barlowCondensed.className}`}>
            News
          </h2>
          <SearchField />
          </SlideIn>
          <SlideIn delay={0.8}>
            <ul className={styles.news_list}>
              {newsList.contents.map((article, index) => (
                <SlideIn as="li" key={article.id} className={styles.news_item} delay={1.2 + index * 0.1}>
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
                      <span
                        className={`flex-wrap items-start md:items-center! gap-x-3.75 gap-y-0 ${styles.news_category}`}
                      >
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
              </SlideIn>
            ))}
            <Pagination totalCount={newsList.totalCount} current={current} type="news" />
            </ul>
          </SlideIn>
        </div>
      </section>
      <Footer />
    </>
  );
}