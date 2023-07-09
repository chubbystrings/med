import React from "react";
import Navigation from "../navigation/Navigation";
import Mobile from "../navigation/Mobile";
import LogoIcon from "../icons/LogoIcon"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" h-full grid grid-cols-1 md:grid-cols-5">
      <Mobile  />
      <section className="py-5 px-5 min-h-screen overflow-y-auto no-scrollbar hidden md:block">
        <Navigation />
      </section>

      <section className="col-span-4 bg-secondary-default px-2 md:px-8 pt-[70px] md:pb-5 md:pt-5 flex flex-col gap-6 h-full overflow-y-auto no-scrollbar">
        {children}
      </section>
    </main>
  );
}
