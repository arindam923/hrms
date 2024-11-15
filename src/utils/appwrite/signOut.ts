"use server";

import { createSessionClient } from "@/lib/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async () => {
  const { account } = await createSessionClient();

  const cookie = await cookies();

  cookie.delete("my-custom-session");
  await account.deleteSession("current");

  redirect("/auth/sign-up");
};
