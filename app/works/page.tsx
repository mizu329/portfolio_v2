import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { getWorksList } from "../libs/microcms";
import SlideIn from "../components/SlideIn";
import { NEWS_LIST_LIMIT } from "../constants";
import Pagination from "../components/Pagination";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default async function Page() {
  // microCMSから記事一覧を取得
  const workList = await getWorksList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <Header />
      <section className={styles.works}>
        <div className={`inner ${styles.works_content}`}>
          <SlideIn>
            <h2
              className={`${styles.works_title} ${barlowCondensed.className}`}
            >
              Works
            </h2>
          </SlideIn>

          <SlideIn delay={0.8}>
            <ul className={styles.news_list}>
              {workList.contents.map((works, index) => (
                <SlideIn
                  as="li"
                  key={works.id}
                  className={styles.works_item}
                  delay={1.2 + index * 0.1}
                >
                  <Link className="md:gap-12.5" href={`/works/${works.id}`}>
                    <div className={styles["works__item-images"]}>
                      <div className={styles.works_image}>
                        {works.workImage ? (
                          <Image
                            src={works.workImage.url}
                            alt={works.title}
                            className={`md:max-w-none h-50 ${styles.works_image}`}
                            width={300}
                            height={200}
                            style={{ objectFit: "contain" }}
                          />
                        ) : (
                          <Image
                            src="/image/noimage.jpg"
                            alt="No Image"
                            className={`md:max-w-none h-50 ${styles.works_image}`}
                            width={300}
                            height={200}
                            style={{ objectFit: "contain" }}
                          />
                        )}
                      </div>
                    </div>
                    <div className={styles["works__item-detail"]}>
                      <h3>{works.title}</h3>
                      <h4 className="text-(--color-gray2)">{works.subtitle}</h4>
                      <p className="mt-2.5!">{works.summary}</p>
                    </div>
                  </Link>
                </SlideIn>
              ))}

              <Pagination totalCount={workList.totalCount} />
            </ul>
          </SlideIn>
        </div>
      </section>
      <Footer />
    </>
  );
}
