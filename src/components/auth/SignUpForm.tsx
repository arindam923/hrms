"use client";

import React from "react";
import { Button, Input, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { signUpWithEmail } from "@/utils/appwrite/signUpwithEmail";

const SignUpForm = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex max-w-xs mx-auto flex-col items-center py-16 justify-center">
      <h2 className="text-3xl font-bold">Create Account</h2>
      <p className=" text-sm text-muted-foreground">
        start your 30 day trial, cancel anytime
      </p>

      <Button
        startContent={<Icon icon="flat-color-icons:google" width={24} />}
        variant="bordered"
        className="mt-4 w-full"
      >
        Continue with Google
      </Button>
      <Button
        startContent={<Icon icon="fe:github" width={24} />}
        variant="bordered"
        className="mt-4 w-full"
      >
        Continue with Github
      </Button>

      <div className="flex w-60  items-center gap-4 py-2">
        <Divider className="flex-1 " />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>

      <form action={signUpWithEmail} className="w-full space-y-4">
        <Input
          isRequired
          label="Email Address"
          name="email"
          placeholder="Enter your email"
          type="email"
          variant="bordered"
        />
        <Input
          isRequired
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-closed-linear"
                />
              ) : (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-bold"
                />
              )}
            </button>
          }
          label="Password"
          name="password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
        />

        <Button className="w-full bg-indigo-600" type="submit">
          Sign Up
        </Button>
      </form>

      <p className="text-center mt-5 text-small">
        Already have an account?&nbsp;
        <Link href="/auth/sign-in">Log In</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
