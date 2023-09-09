import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioContent } from "@/content/portfolio";

export const PortfolioCard = () => {
  return (
    <>
      {portfolioContent.map((pc, index) => {
        return (
          <Card key={index} className="my-3">
            <CardHeader>
              <CardTitle>{pc.title}</CardTitle>
              <CardDescription>{pc.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};
