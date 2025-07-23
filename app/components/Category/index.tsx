import styles from "./index.module.css";

export type Category = {
  name: string;
};

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
