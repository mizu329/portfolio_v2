import Image from "next/image";
import styles from "./index.module.css";

export default function SearchField() {
  return (
    <form action="">
      <label htmlFor="">
        <Image
          src="/images/search.svg"
          alt="Search Icon"
          width={20}
          height={20}
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </label>
    </form>
  );
}
