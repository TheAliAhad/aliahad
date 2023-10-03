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

export const PortfolioCard = () => {
  return (
    <>
      {PortfolioContent.map((pc, index) => {
        return (
          <div key={index} className="flex flex-col">
            <Card className="flex gap-3 my-3 flex-wrap">
              <CardHeader>
                <CardTitle>{pc.title}</CardTitle>
                <CardDescription>
                  <div className="flex gap-3">
                    {pc.desc.map((item, i) => (
                      <Badge key={i} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, fugiat! Saepe nisi autem, ad quis iusto officiis odit,
                  qui reprehenderit culpa accusamus nemo vel omnis delectus
                  exercitationem molestias earum cum!
                </p>
              </CardContent>
              <CardFooter className="gap-3">
                <a>github</a>
                <a>view</a>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </>
  );
};
