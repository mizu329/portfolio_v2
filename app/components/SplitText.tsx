import React from "react";
import styles from "./SplitText.module.css";

type Props = {
  text: string;
  delayOffset?: number; // 最初の文字が動き出すまでの待機時間（秒）
  stagger?: number; // 文字一つあたりの遅延幅（秒）
  className?: string; // 外側のタグに適用するクラス名
};

export default function SplitText({
  text,
  delayOffset = 0,
  stagger = 0.04,
  className = "",
}: Props) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className={styles.revealWrapper}>
          <span
            className={styles.revealTextLetter}
            style={{
              animationDelay: `${Math.round((delayOffset + i * stagger) * 100) / 100}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}
