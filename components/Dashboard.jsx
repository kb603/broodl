"use client";
import { Fugaz_One } from "next/font/google";
import Calendar from "./Calendar";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Dashboard() {
  const statuses = {
    num_days: 10,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  const moods = {
    "&*@#$": "😭",
    Sad: "🥲",
    Existing: "😶",
    Good: "😊",
    Elated: "😍",
  };

  return (
    <div className="flex flex-1 flex-col gap-8 sm:gap-12 md:gap-16">
      <div className="grid grid-cols-1 rounded-lg bg-indigo-50 text-indigo-500 sm:grid-cols-3">
        {Object.keys(statuses).map((statusKey, statusIndex) => {
          return (
            <div
              key={statusIndex}
              className="sm:gap- 2 flex flex-col gap-1 p-4"
            >
              <p className="text-xs font-medium uppercase sm:text-sm">
                {statusKey.replaceAll("_", " ")}
              </p>
              <p className={"truncate text-base sm:text-lg " + fugaz.className}>
                {statuses[statusKey]}
              </p>
            </div>
          );
        })}
      </div>
      <h4
        className={
          "text-center text-5xl sm:text-6xl md:text-7xl " + fugaz.className
        }
      >
        How do you <span className="textGradient">feel </span> today
      </h4>
      <div className="grid-col-2 md:grid-col-5 grid gap-4">
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button
              onClick={() => {
                const currentMoodValue = moodIndex + 1;
                handleSetMood(currentMoodValue);
              }}
              className={
                "purpleShadow flex flex-1 flex-col items-center gap-2 rounded-2xl bg-indigo-50 p-4 px-5 text-center duration-200 hover:bg-indigo-100"
              }
              key={moodIndex}
            >
              <p className="text-4xl sm:text-5xl md:text-6xl">{moods[mood]}</p>
              <p
                className={
                  "text-xs text-indigo-500 sm:text-sm md:text-base " +
                  fugaz.className
                }
              >
                {mood}
              </p>
            </button>
          );
        })}
      </div>
      <Calendar />
    </div>
  );
}
