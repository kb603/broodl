import { Fugaz_One } from "next/font/google";
import React from "react";
import Button from "./Button";
import Calendar from "./Calendar";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 py-4 sm:gap-10 md:py-10">
      <h1
        className={
          "text-center text-5xl sm:text-6xl md:text-7xl " + fugaz.className
        }
      >
        <span className="textGradient">Broodl</span> helps you track your{" "}
        <span className="textGradient">daily</span> mood!
      </h1>
      <p className="mx-auto w-full max-w-[600px] text-center text-lg sm:text-xl md:text-2xl">
        Create your mood record and see how you feel on{" "}
        <span className="font-semibold">every day of every year.</span>
      </p>
      <div className="mx-auto grid w-fit grid-cols-2 gap-4">
        <Button text="Sign Up" />
        <Button text="Login" dark />
      </div>
      <Calendar />
    </div>
  );
}
