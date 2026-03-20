import { WORKS_LIST_LIMIT } from "@/app/constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
    totalCount: number;
    current?: number;
};

export default function Pagination({totalCount, current = 1}: Props) {
    const pages = Array.from({length: Math.ceil(totalCount / WORKS_LIST_LIMIT)}, (_, i) => i + 1);
  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((page) => (
            <li key={page}>
                <Link href={`/works/p/${page}`} className={page === current ? styles.current : ""}>
                    {page}
                </Link>
            </li>
        ))}
      </ul>
    </nav>
  );
}
