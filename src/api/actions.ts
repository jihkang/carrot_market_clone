"use server";

import {z} from "zod";

const validateUser = (username: string) => {
  const regex = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  return (RegExp(regex).test(username) === false)
}

const formScheme = z.object({
  username: z.string().min(5).max(12).refine(validateUser, {"message": "cannot include special character in username"}),
  email: z.string().email(),
  password: z.string().min(7).max(14),
  confirm_password: z.string().min(7).max(14),
}).refine(({password, confirm_password}) => password === confirm_password, {
  message: "password don't match",
  path: ['confirm_password'],
})

export async function handleForm(prevState: unknown, formData: FormData) {
  const data = {
    "username": formData.get("username"),
    "email": formData.get("email"),
    "password": formData.get("password"),
    "confirm_password": formData.get("confirm_password"),
  }

  const result = formScheme.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return result.error.flatten();
  }
  return result.data
}