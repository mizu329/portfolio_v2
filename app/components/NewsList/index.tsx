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

export default async function NewsList() {
  const newsList = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  console.log(newsList);

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
                <Link href={`/news/${article.id}`} className={styles.news_link}>
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
                        // width={168}
                        // height={100}
                      />
                    )}
                  </div>

                  <dl className={styles.news_wrapper}>
                    <dt>
                      <h3>{article.title}</h3>
                    </dt>
                    <dd>
                      <span className={styles.news_category}>
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
          <div className={styles.news_button}>
            <ButtonLink href="/news">View more</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
