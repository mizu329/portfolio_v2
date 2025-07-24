import Link from "next/link";
import styles from "./index.module.css";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <>
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    </>
  );
}
