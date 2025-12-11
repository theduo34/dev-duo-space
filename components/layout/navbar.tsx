"use client";

import {Menu} from "lucide-react";
import Link from "next/link";
import React from "react";
import {Button} from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {Separator} from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Logo} from "@/components/layout/logo";
import QuickInfo from "@/components/shared/quick-info";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#project",
    label: "Project",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#contact",
    label: "Contact",
  },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header
      className="shadow-inner bg-opacity-15 w-full top-0 m-0 sticky z-40 flex justify-between items-center py-4 px-4 md:px-8 bg-muted dark:bg-card overflow-x-hidden">
      <Logo/>

      {/*mobile drawer sheet*/}
      <div className="flex items-center md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer md:hidden"
            />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col justify-between px-2 h-screen bg-card z-[100]"
          >
            <div>
              <SheetHeader className="mb-4">
                <SheetTitle className="flex items-center">
                  <Logo/>
                </SheetTitle>
              </SheetHeader>

              {/* MENU ITEMS */}
              <div className="flex flex-col max-h-[calc(100vh-6rem)] space-y-4">
                <Separator/>
                {routeList.map(({href, label}) => (
                  <div key={href} className="flex flex-col gap-4">
                    <Button
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base capitalize font-bold"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                    <Separator/>
                  </div>
                ))}
              </div>
            </div>
            <SheetFooter className="flex-col w-full justify-start items-start my-2 p-2 ">
              <Separator/>
              <QuickInfo/>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/*desktop nav*/}
      <NavigationMenu className="hidden md:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem className={"w-full flex flex-row gap-4"}>
            {routeList.map(({href, label}) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="px-2">
                  <p className={"text-base font-bold capitalize font-bold"}>{label}</p>
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden md:flex gap-2">
        <QuickInfo/>
      </div>
    </header>
  );
};

