// "use client";
//
// import {Menu} from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import {Button} from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import {Separator} from "@/components/ui/separator";
// import {
//   Sheet,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {Logo} from "@/components/layout/logo";
// import QuickInfo from "@/components/shared/quick-info";
//
// interface RouteProps {
//   href: string;
//   label: string;
// }
//
// const routeList: RouteProps[] = [
//   {
//     href: "#project",
//     label: "Project",
//   },
//   {
//     href: "#about",
//     label: "About",
//   },
//   {
//     href: "#experience",
//     label: "Experience",
//   },
//   {
//     href: "#contact",
//     label: "Contact",
//   },
//
// ];
//
// export default function Navbar() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   return (
//     <header
//       className="shadow-inner bg-opacity-15 w-full top-0 m-0 sticky z-40 flex justify-between items-center py-4 px-4 md:px-8 bg-muted dark:bg-card overflow-x-hidden">
//       <Logo/>
//
//       {/*mobile drawer sheet*/}
//       <div className="flex items-center md:hidden">
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild>
//             <Menu
//               onClick={() => setIsOpen(!isOpen)}
//               className="cursor-pointer md:hidden"
//             />
//           </SheetTrigger>
//           <SheetContent
//             side="left"
//             className="flex flex-col justify-between px-2 h-screen bg-card z-[100]"
//           >
//             <div>
//               <SheetHeader className="mb-4">
//                 <SheetTitle className="flex items-center">
//                   <Logo/>
//                 </SheetTitle>
//               </SheetHeader>
//
//               {/* MENU ITEMS */}
//               <div className="flex flex-col max-h-[calc(100vh-6rem)] space-y-4">
//                 <Separator/>
//                 {routeList.map(({href, label}) => (
//                   <div key={href} className="flex flex-col gap-4">
//                     <Button
//                       onClick={() => setIsOpen(false)}
//                       asChild
//                       variant="ghost"
//                       className="justify-start text-base capitalize font-bold"
//                     >
//                       <Link href={href}>{label}</Link>
//                     </Button>
//                     <Separator/>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <SheetFooter className="flex-col w-full justify-start items-start my-2 p-2 ">
//               <Separator/>
//               <QuickInfo/>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       </div>
//
//       {/*desktop nav*/}
//       <NavigationMenu className="hidden md:block mx-auto">
//         <NavigationMenuList>
//           <NavigationMenuItem className={"w-full flex flex-row gap-4"}>
//             {routeList.map(({href, label}) => (
//               <NavigationMenuLink key={href} asChild>
//                 <Link href={href} className="px-2">
//                   <p className={"text-base font-bold capitalize font-bold"}>{label}</p>
//                 </Link>
//               </NavigationMenuLink>
//             ))}
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//
//       <div className="hidden md:flex gap-2">
//         <QuickInfo/>
//       </div>
//     </header>
//   );
// };
//
"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import {ToggleTheme} from "@/components/layout/toggle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

 const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-full top-0 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center  bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
        Shadcn
      </Link>
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
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Shadcn
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={"flex items-center"}>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
 export default Navbar;

