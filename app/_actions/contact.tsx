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

  const result = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          {
            name: "fullname",
            value: rawFormDate.name,
          },
          {
            name: "company",
            value: rawFormDate.company,
          },
          {
            name: "email",
            value: rawFormDate.email,
          },
          {
            name: "message",
            value: rawFormDate.message,
          },
        ],
      }),
    }
  );

  try {
    await result.json();
  } catch (e) {
    console.log(e);
    return {
      status: "error",
      message:
        "お問い合わせの送信に失敗しました。時間をおいて再度お試しください。",
    };
  }
  return {
    status: "success",
    message: "お問い合わせを送信しました。内容確認後、ご連絡致します。",
  };
}
