import { NEWS_LIST_LIMIT, WORKS_LIST_LIMIT } from "@/app/constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
    totalCount: number;
    current?: number;
  type?: "works" | "news";
};

export default function Pagination({ totalCount, current = 1, type = "works" }: Props) {
  const limit = type === "news" ? NEWS_LIST_LIMIT : WORKS_LIST_LIMIT;
  const pages = Array.from({ length: Math.ceil(totalCount / limit) }, (_, i) => i + 1);
  const basePath = type === "news" ? "/news" : "/works";

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((page) => (
            <li key={page}>
        <Link href={`${basePath}/p/${page}`} className={page === current ? styles.current : ""}>
                    {page}
                </Link>
            </li>
        ))}
      </ul>
    </nav>
  );
}
