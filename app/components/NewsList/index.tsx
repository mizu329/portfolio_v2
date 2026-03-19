import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import Category from "../Category";
import SlideIn from "../SlideIn";
import Date from "../Date";
import { News } from "@/app/libs/microcms";

type Props = {
  news: News[];
};

export default async function NewsList({ news }: Props) {
  return (
    <>
      <SlideIn delay={0.2}>
        <ul className={styles.news_list}>
          {news.map((article, index) => (
            <SlideIn as="li" key={article.id} className={styles.news_item} delay={0.6 + index * 0.1}>
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
                  <span className={`flex flex-wrap gap-x-[15px] gap-y-0 ${styles.news_category}`}>
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
        </ul>
      </SlideIn>
    </>
  );
}
