import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import { throttle } from "@/utils/throttle";

export default function Home() {

  const formHandler = async (formData: FormData) => {
    "use server";
    console.log("hello?");
    await new Promise((resolve) => {
      setTimeout(() => { 
        resolve("good");
      }, 5000);
    })
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formHandler}>
        <FormInput type="text" placeholder="Username" name="username"/>
        <FormButton text="Create Account" loading={false}/>
      </form>
    </main>
  );
}
