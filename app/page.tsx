import { Line } from "@/components/manual/line";
import Particles from "@/components/particles";
import { PortfolioCard } from "@/components/portfolioCard";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-row content-between gap-3 justify-center p-3">
        <div className="pt-4">
          <h1>Featured Portfolio</h1>
        </div>
        <div className="w-2/4">
          <Line />
        </div>
      </div>

      <PortfolioCard />
      <Link
        href="/about"
        className="underlineLink text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
      >
        See more portfolio &rarr;
      </Link>
    </>
  );
}
