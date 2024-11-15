"use server";

import { createAdminClient } from "@/lib/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ID } from "node-appwrite";

export async function signUpWithEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  //   const name = formData.get("name") as string;

  const { account } = await createAdminClient();

  await account.create(ID.unique(), email, password);
  const session = await account.createEmailPasswordSession(email, password);

  const cookie = await cookies();
  cookie.set("my-custom-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  redirect("/dashboard");
}
