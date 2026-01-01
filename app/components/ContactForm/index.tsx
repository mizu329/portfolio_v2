"use client";

import { createContactDate } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";

const initalState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactDate, initalState);
  console.log(state);
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
    <form className={styles.form} action={formAction}>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="name">
          お名前 <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="name"
          name="name"
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
