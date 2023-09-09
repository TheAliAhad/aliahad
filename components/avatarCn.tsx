import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarCn() {
  return (
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/90032081?s=400&u=81cd65bab327c9a2389d1356aba09dcab522a222&v=4" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
