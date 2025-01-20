import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Broodl",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="flex items-center justify-between gap-4 p-4 sm:p-8">
      <Link href={"/"}>
        <h1 className={"textGradient text-base sm:text-lg " + fugaz.className}>
          Broodl
        </h1>
      </Link>
      <div className="flex items-center justify-between">PLACEHOLDER</div>
    </header>
  );

  const footer = (
    <footer className="grid place-items-center p-4 sm:p-8">
      <Link href={"https://youtu.be/lkjrUW8fI40"} target="_blank" className="">
        <p
          className={
            "text-indigo-500 duration-200 hover:bg-indigo-500 hover:text-white " +
            fugaz.className
          }
        >
          Built by Smoljames 💛
        </p>
      </Link>
    </footer>
  );

  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={
            "mx-auto flex min-h-screen w-full max-w-[1000px] flex-col text-sm text-slate-800 sm:text-base " +
            opensans.className
          }
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
