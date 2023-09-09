import { Line } from "@/components/manual/line";
import { PortfolioCard } from "@/components/portfolioCard";
export default function Home() {
  return (
    <>
      <div className="flex flex-row content-between gap-3 justify-center p-3">
        <div className="pt-4">
          <h1>Featured Portfolio</h1>
        </div>
        <div className="w-2/4">
          <Line />
        </div>
      </div>

      <PortfolioCard />
    </>
  );
}
