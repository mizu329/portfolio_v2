import styles from "../../page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { getWorksList } from "@/app/libs/microcms";
import SlideIn from "@/app/components/SlideIn";
import { WORKS_LIST_LIMIT } from "@/app/constants";
import Pagination from "@/app/components/Pagination";
import { notFound } from "next/navigation";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

type Props = {
    params: Promise<{
        current: string;
    }>;
};

export default async function Page({ params }: Props) {
  const current = parseInt(await (await params).current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const workList = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    offset: (current - 1) * WORKS_LIST_LIMIT
  });

  if (workList.contents.length === 0 && current > 1) {
    notFound();
  }

  return (
    <>
      <Header />
      <section className={styles.works}>
        <div className={`inner ${styles.works_content}`}>
          <SlideIn>
          <h2 className={`${styles.works_title} ${barlowCondensed.className}`}>
            Works
          </h2>
          </SlideIn>

          <SlideIn delay={0.8}>
            <ul className={styles.news_list}>
              {workList.contents.map((works, index) => (
                <SlideIn as="li" key={works.id} className={styles.works_item} delay={1.2 + index * 0.1}>
                  <Link className="md:gap-12.5" href={`/works/${works.id}`}>
                  <div className={styles["works__item-images"]}>
                    <div className={styles.works_image}>
                      {works.workImage ? (
                        <Image src={works.workImage.url} alt={works.title} className={`md:max-w-none h-50 ${styles.works_image}`} width={300} height={200} style={{ objectFit: "contain" }} />
                      ) : (
                        <Image src="/image/noimage.jpg" alt="No Image" className={`md:max-w-none h-50 ${styles.works_image}`} width={300} height={200} style={{ objectFit: "contain" }} />
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
            <Pagination totalCount={workList.totalCount} current={current} />
            </ul>
          </SlideIn>
        </div>
      </section>
      <Footer />
    </>
  );
}
