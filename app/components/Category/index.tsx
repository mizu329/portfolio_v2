import styles from "./index.module.css";
import type { Category } from "../../libs/microcms";

type Props = {
  categories: Category[] | undefined;
};

export default function Category({ categories }: Props) {
  if (!categories || categories.length === 0) {
    return <span className={styles.category_label}>未分類</span>;
  }
  return (
    <>
      {categories.map((cat) => (
        <span key={cat.id} className={styles.category_item}>
          <span className={styles.category_label}>{cat.name}</span>
        </span>
      ))}
    </>
  );
}
