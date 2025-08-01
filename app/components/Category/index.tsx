import styles from "./index.module.css";
import type { Category } from "../../libs/microcms";

type Props = {
  categories: Category[] | undefined;
};

export default function Category({ categories }: Props) {
  if (!categories || categories.length === 0) {
    return <span className={styles.no_category}>未分類</span>;
  }
  return (
    <>
      {categories.map((cat) => (
        <span key={cat.id} className={styles.category}>
          <span className={styles.category_name}>{cat.name}</span>
        </span>
      ))}
    </>
  );
}
