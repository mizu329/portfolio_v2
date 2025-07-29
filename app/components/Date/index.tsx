import styles from "./index.module.css";
import { formatDate } from "../../libs/utils";

type Props = {
  date?: string;
};

export default function Date({ date }: Props) {
  if (!date) return null;
  return <span className={styles.date}>{formatDate(date)}</span>;
}
