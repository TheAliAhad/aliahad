import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { ModeToggle } from "@/components/modeToggle";

export const HeaderMenu = () => {
  return (
    <div className="flex mb-3">
      <Menubar className="mr-2">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/">Home</Link>
          </MenubarTrigger>
          <MenubarTrigger>
            <Link href="/portfolio">Portfolio</Link>
          </MenubarTrigger>
          {/* <MenubarTrigger>
            <Link href="/me">About Me</Link>
          </MenubarTrigger> */}
          <MenubarTrigger>
            <Link href="/contact">Contact</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <ModeToggle />
    </div>
  );
};
