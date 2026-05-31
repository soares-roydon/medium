import { Link } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";
import type { SigninInput, SignupInput } from "@roydon-soares/medium-common";

function Auth({ type }: { type: "signup" | "signin" }) {
  const [postSignupInput, setpostSignupInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [postSigninInput, setpostSigninInput] = useState<SigninInput>({
    email: "",
    password: "",
  });

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="rounded shadow-md px-6 py-4 w-96">
          <div className="text-3xl font-bold text-center mb-7">
            {type === "signup" ? "Create an account" : "Welcome back"}
          </div>
          {type === "signup" ? (
            <div>
              <Input
                label="Name"
                placeholder="Monkey D. Luffy"
                onChange={(e) => {
                  setpostSignupInput((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
              <Input
                label="Email"
                placeholder="strawhat@onepiece.com"
                type={"email"}
                onChange={(e) => {
                  setpostSignupInput((c) => ({
                    ...c,
                    email: e.target.value,
                  }));
                }}
              />
              <Input
                label="Password"
                placeholder="*******"
                type={"password"}
                onChange={(e) => {
                  setpostSignupInput((c) => ({
                    ...c,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
          ) : (
            <div>
              <Input
                label="Email"
                placeholder="strawhat@onepiece.com"
                type={"email"}
                onChange={(e) => {
                  setpostSigninInput((c) => ({
                    ...c,
                    email: e.target.value,
                  }));
                }}
              />
              <Input
                label="Password"
                placeholder="*******"
                type={"password"}
                onChange={(e) => {
                  setpostSigninInput((c) => ({
                    ...c,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
          )}
          <button className="flex justify-center items-center bg-blue-500 py-1 w-full border border-zinc-500 rounded text-white cursor-pointer hover:bg-blue-600">
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
          <div className="flex justify-center mt-3 mb-1">
            <div className="flex gap-1 text-sm text-slate-500">
              <div>
                {type === "signup"
                  ? "Already have an account?"
                  : "Don't have an account ?"}
              </div>
              <div className="underline">
                {type === "signup" ? (
                  <Link to={"/signin"}>signin</Link>
                ) : (
                  <Link to={"/signup"}>signup</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
