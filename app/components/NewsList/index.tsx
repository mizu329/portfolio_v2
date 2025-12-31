import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/libs/microcms";

type Props = {
  news: News[];
};

export default async function NewsList({ news }: Props) {
  return (
    <>
      <ul className={styles.news_list}>
        {news.map((article) => (
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
    </>
  );
}
