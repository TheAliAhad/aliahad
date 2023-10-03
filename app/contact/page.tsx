import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Line } from "@/components/manual/line";
import { socialMedia } from "@/content/socialMedia";

const ContactPage = () => {
  return (
    <>
      <Card className="m-3">
        <CardHeader>
          <CardTitle>Contact me(Recommanded):</CardTitle>
        </CardHeader>
        <CardContent className="grid place-items-center">
          <Link href="mailto:ali@aliahad.com">
            <Badge variant="secondary">ali@aliahad.com </Badge>
          </Link>
        </CardContent>
      </Card>
      <div className="flex flex-row content-between gap-3 justify-center p-3">
        <div className="pt-4">
          <h1>Other Activities</h1>
        </div>
        <div className="w-2/4">
          <Line />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 content-center">
        {socialMedia.map((s, index) => {
          return (
            <div key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    {s.name} <Badge variant="outline">{s.status} </Badge>
                  </CardTitle>
                  <CardDescription>
                    <Link href={s.link}>Link</Link>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ContactPage;
