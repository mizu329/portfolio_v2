import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import { getWorksDetail } from "../../libs/microcms";
import { Barlow_Condensed } from "next/font/google";
import ButtonLink from "../../components/ButtonLink";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const work = await getWorksDetail(slug);

  return (
    <>
      <Header />
      <section className={styles.works}>
        <div className={`inner ${styles.works_content}`}>
          <h2 className={`${styles.works_title} ${barlowCondensed.className}`}>
            Works
          </h2>
          <div className={styles.works_base}>
            <h3 className={styles["works__item-title"]}>{work.title}</h3>
            <h4 className={styles["works__item-subtitle"]}>{work.subtitle}</h4>
            <div className={styles.works_image}>
              {work.workImage ? (
                <Image
                  src={work.workImage.url}
                  alt={work.title}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100%, 768px"
                />
              ) : (
                <Image
                  src="/image/noimage.jpg"
                  alt="No Image"
                  className={styles.works_image}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100%, 768px"
                />
              )}
            </div>
            <div dangerouslySetInnerHTML={{ __html: work.body || "" }} />
            <div className={styles.works_button}>
              <ButtonLink href="/works">Works一覧へ</ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
