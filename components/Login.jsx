import { Fugaz_One } from "next/font/google";
import Button from "./Button";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h3 className={"md:text text-4xl sm:text-5xl " + fugaz.className}>
        Login / Register
      </h3>
      <p>You're one step away!</p>
      <input
        placeholder="email"
        className="mx-auto w-full max-w-[400px] rounded-full border border-solid border-indigo-400 px-3 py-2 outline-none duration-200 hover:border-indigo-600 sm:py-3"
      />
      <input
        placeholder="password"
        type="password"
        className="mx-auto w-full max-w-[400px] rounded-full border border-solid border-indigo-400 px-3 py-2 outline-none duration-200 hover:border-indigo-600 focus:border-indigo-600 sm:py-3"
      />
      <div className="mx-auto w-full max-w-[400px]">
        <Button text="Submit" full />
      </div>
      <p className="text-center">
        Don't have an account? <span className="text-indigo-600">Sign up</span>
      </p>
    </div>
  );
}
