import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PortfolioContent } from "@/content/portfolio";
import Link from "next/link";

export const FeaturedPortfolioCard = () => {
  return (
    <>
      {PortfolioContent.slice(0, 2).map((pc, index) => {
        return (
          <div key={index} className="flex flex-col">
            <Card className="flex gap-3 my-3 flex-wrap">
              <CardHeader>
                <CardTitle>{pc.title}</CardTitle>
                <CardDescription>
                  <div className="flex gap-3">
                    {pc.stack.map((item, i) => (
                      <Badge key={i} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{pc.desc}</p>
              </CardContent>
              <CardFooter className="gap-3">
                <Link
                  className="underlineLink text-md w-max cursor-pointer text-sm"
                  href={pc.github}
                >
                  Source code
                </Link>
                <Link
                  className="underlineLink text-md w-max cursor-pointer text-sm"
                  href={pc.live}
                >
                  view
                </Link>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </>
  );
};
