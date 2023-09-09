import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AvatarCn } from "@/components/avatarCn";

export default function HeaderCard() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row">
          <div className="px-3 pt-1">
            <AvatarCn />
          </div>
          <div>
            <CardTitle>Ali Ahad</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
