"use server";

import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/appwrite";
import { cookies } from "next/headers";

export async function signInWithEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailPasswordSession(email, password);

    const cookie = await cookies();
    cookie.set("my-custom-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    redirect("/dashboard");
  } catch (error) {
    console.error("Sign in failed:", error);
  }
}
