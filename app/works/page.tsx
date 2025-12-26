import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { getWorksList } from "../libs/microcms";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const workList = await getWorksList(slug);

  return (
    <>
      <Header />
      <section className={styles.works}>
        <div className={`inner ${styles.works_content}`}>
          <h2 className={`${styles.works_title} ${barlowCondensed.className}`}>
            Works
          </h2>

          <ul className={styles.news_list}>
            {workList.contents.map((works) => (
              <li key={works.id} className={styles.works_item}>
                <Link href={`/works/${works.id}`}>
                  <div className={styles["works__item-images"]}>
                    <div className={styles.works_image}>
                      {works.workImage ? (
                        <Image
                          src={works.workImage.url}
                          alt={works.title}
                          className={styles.works_image}
                          width={300}
                          height={200}
                          style={{ objectFit: "contain" }}
                        />
                      ) : (
                        <Image
                          src="/image/noimage.jpg"
                          alt="No Image"
                          className={styles.works_image}
                          width={300}
                          height={200}
                          style={{ objectFit: "contain" }}
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles["works__item-detail"]}>
                    <h3>{works.title}</h3>
                    <h4>{works.subtitle}</h4>
                    <p>{works.summary}</p>
                  </div>
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
