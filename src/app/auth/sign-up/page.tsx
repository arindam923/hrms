import React from "react";
import SignUpForm from "@/components/auth/SignUpForm";
import { getLoggedInUser } from "@/utils/appwrite/getLoggedInUser";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const user = await getLoggedInUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex w-full h-screen">
      <div className="max-w-md w-full h-full p-5">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-indigo-600 rounded-lg" />
          <h2 className="text-2xl font-bold">HRMS</h2>
        </div>

        <SignUpForm />
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://cdn.dribbble.com/users/2067291/screenshots/11243208/media/255d8e031255d937170cf7980ed58dbb.png)",
        }}
        className="flex-grow border"
      ></div>
    </div>
  );
}
