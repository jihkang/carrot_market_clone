"use client";

import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import { handleForm } from "@/api/actions";
import { useFormState } from "react-dom";

const invalidKeyInResult = (key: string, state: { username?: string[] | undefined; email?: string[] | undefined; password?: string[] | undefined; confirm_password?: string[] | undefined; }) => {
  return Object.keys(state).includes(key);
}

export default function Home() {
  const [state, action] = useFormState(handleForm, null);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={action}>
        <FormInput type="text" placeholder="Username" name="username" errors={}/>
        <FormInput type="email" placeholder="email" name="email" errors={typeof state?.email === "string" ? undefined : state?.email}/>
        <FormInput type="password" placeholder="password" name="password" errors={state?.password}/>
        <FormInput type="password" placeholder="confirm password" name="confirm_password" errors={state?.confirm_password}/>
        <FormButton text="Create Account" loading={false}/>
      </form>
    </main>
  );
}
