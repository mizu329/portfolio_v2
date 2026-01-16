"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { useState } from "react";
import cx from "classnames";
import { MenuOpen } from "../icon/menu-open";
import { MenuClose } from "../icon/menu-close";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  //   const open = () => setIsOpen(true);
  //   const close = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

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
            <Link href="/service">できること</Link>
          </li>
          <li>
            <Link href="/aboutme">運営者情報</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>

      <button
        id="btn03"
        className={cx(styles.menu_button, isOpen && "active")}
        onClick={toggleMenu}
        aria-label="メニューを開閉"
      >
        <div>
          {isOpen ? (
            <MenuClose
              size={24}
              color="var(--color-gray)"
              className="text-white hover:text-red-500 transition-colors"
            />
          ) : (
            <MenuOpen
              size={24}
              color="var(--color-gray)"
              className="hover:text-red-500 transition-colors"
            />
          )}
        </div>
      </button>
    </>
  );
}
