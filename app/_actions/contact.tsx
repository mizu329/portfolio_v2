"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactDate(_prevState: any, formData: FormData) {
  const rawFormDate = {
    name: formData.get("name") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  if (!rawFormDate.name) {
    return {
      status: "error",
      message: "お名前は必須項目です。",
    };
  }
  if (!rawFormDate.email) {
    return {
      status: "error",
      message: "メールアドレスは必須項目です。",
    };
  }
  if (!validateEmail(rawFormDate.email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が誤っています。",
    };
  }
  if (!rawFormDate.message) {
    return {
      status: "error",
      message: "お問い合わせ内容を入力してください。",
    };
  }

  return {
    status: "success",
    message: "お問い合わせを送信しました。内容確認後、ご連絡致します。",
  };
}
