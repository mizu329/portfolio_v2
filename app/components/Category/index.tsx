import styles from "./index.module.css";
import type { Category } from "../../libs/microcms";

type Props = {
  category?: Category;
};

export default function Category({ category }: Props) {
  return (
    <>
      <span className={styles.tag}>{category?.name ?? "未分類"}</span>
    </>
  );
}
