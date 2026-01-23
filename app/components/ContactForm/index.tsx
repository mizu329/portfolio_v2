"use client";

import { createContactDate } from "@/app/_actions/contact";
import { useActionState } from "react";
import styles from "./index.module.css";
import { sendGAEvent } from "@next/third-parties/google";

type FormState = {
  status: "success" | "error" | "";
  message: string;
};

const initialState: FormState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(createContactDate, initialState);
  console.log(state);

  const handleSubmit = () => {
    sendGAEvent({ event: "contact", value: "submit" });
  };

  if (state.status === "success") {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form className={styles.form} action={formAction} onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="hutk"
        value={
          typeof document !== "undefined"
            ? document.cookie
                .split("; ")
                .find((row) => row.startsWith("hubspotutk="))
                ?.split("=")[1] ?? ""
            : ""
        }
      />
      <div className={styles.item}>
        <label className={styles.label} htmlFor="name">
          お名前 <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="田中太郎"
          required
        />
      </div>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="company"
          autoComplete="company"
          name="company"
        />
      </div>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="example@example.com"
          required
        />
      </div>

      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          お問い合わせ内容 <span className={styles.required}>*</span>
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          autoComplete="message"
          placeholder="お問い合わせ内容をご記入ください。"
          required
        />
      </div>

      <div className={styles.action}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
