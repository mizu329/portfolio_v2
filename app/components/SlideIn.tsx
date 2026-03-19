"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SlideIn.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // アニメーションを遅らせる時間（秒）
  as?: React.ElementType; // タグを自由に変更可能にする
};

export default function SlideIn({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 一度表示されたら監視を解除する（毎回アニメーションさせたい場合は外す）
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // 10%が見えたら発火
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const currentRef = ref.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.slideIn} ${isVisible ? styles.visible : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
