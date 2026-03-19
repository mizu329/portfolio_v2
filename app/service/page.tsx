import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Barlow_Condensed } from "next/font/google";
import Image from "next/image";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // 必要なウェイトを指定
  display: "swap",
});

export default function page() {
  return (
    <>
      <Header />

      <section className={styles.service}>
        <div className={`inner ${styles.service_content}`}>
          <h2
            className={`${styles.service_title} ${barlowCondensed.className}`}
          >
            Service
          </h2>
          <div className={styles.service_base}>
            <ul className={styles.service_list}>
              <li className={styles.service_item}>
                <div className={styles["service__item-image"]}>
                  <Image
                    className={`md:max-w-none ${styles.image}`}
                    src="/image/HPLP.png"
                    alt="HP/LP制作"
                    width={300}
                    height={200}
                  />
                  <p className="mt-2.5!">HP/LP/アプリ制作</p>
                </div>
                <div className={styles["service__item-text"]}>
                  <p>
                    Next.js・microCMSを活用したJamstack構成のWebサイトや、LP制作を行っています。
                    アナリティクス導入やCRM連携など、マーケティングを意識した実装にも対応可能です。
                  </p>
                </div>
              </li>
              <li className={styles.service_item}>
                <div className={styles["service__item-image"]}>
                  <Image
                    className={`md:max-w-none ${styles.image}`}
                    src="/image/Banner.png"
                    alt="バナー制作"
                    width={300}
                    height={200}
                  />
                  <p className="mt-2.5!">バナー制作</p>
                </div>
                <div className={styles["service__item-text"]}>
                  <p>
                    Webサイト・SNS・広告用のバナー制作を行っています。目的や訴求内容に合わせたデザインをご提案します。
                  </p>
                </div>
              </li>
              <li className={styles.service_item}>
                <div className={styles["service__item-image"]}>
                  <Image
                    className={`md:max-w-none ${styles.image}`}
                    src="/image/UIUX.png"
                    alt="UIUX改善"
                    width={300}
                    height={200}
                  />
                  <p className="mt-2.5!">UIUX改善</p>
                </div>
                <div className={styles["service__item-text"]}>
                  <p>
                    ユーザー行動を意識した UI / UX
                    改善を行い、離脱防止やコンバージョン向上を目指します。
                  </p>
                </div>
              </li>
              <li className={styles.service_item}>
                <div className={styles["service__item-image"]}>
                  <Image
                    className={`md:max-w-none ${styles.image}`}
                    src="/image/Maintenance.png"
                    alt="保守運用管理"
                    width={300}
                    height={200}
                  />
                  <p className="mt-2.5!">保守運用管理</p>
                </div>
                <div className={styles["service__item-text"]}>
                  <p>
                    サイトにおいて、
                    コンテンツ更新、ビルド・デプロイ管理、軽微な改修、表示確認など、
                    継続的な保守・運用をご支援します。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
