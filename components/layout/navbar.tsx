"use client";

import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

 const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-full top-0 mx-auto sticky  bg-muted dark:bg-card px-4 py-4 md:px-8 z-40 flex justify-between items-center bg-card">
      <Logo/>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="top"
            className="flex flex-col h-full justify-between px-4 bg-card"
          >
            <div>
              <SheetHeader className="mb-4">
                <SheetTitle className="flex items-center">
                  <Logo/>
                </SheetTitle>
              </SheetHeader>

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

            <SheetFooter className="flex-col sm:flex-col justify-start items-start p-0 py-2">
              <Separator className="mb-2"/>
              <QuickInfo/>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
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
export default Navbar;

