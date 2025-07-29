"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { useState } from "react";
import cx from "classnames";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <nav className={cx(styles.menu_nav, isOpen && styles.open)}>
        <ul>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/works">制作事例</Link>
          </li>
          <li>
            <Link href="/service">事業内容</Link>
          </li>
          <li>
            <Link href="/aboutme">運営者情報</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>

        <button
          className={cx(styles.menu_button, isOpen && styles.close)}
          onClick={close}
          aria-label="メニューを開閉"
        >
          <span />
          <span />
          <span />
          <p>閉じる</p>
        </button>
      </nav>

      <button
        className={styles.menu_button}
        onClick={open}
        aria-label="メニューを開閉"
      >
        <span />
        <span />
        <span />
        <p>メニュー</p>
      </button>
    </>
  );
}
