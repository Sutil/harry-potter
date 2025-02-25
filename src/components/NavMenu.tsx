import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { Link, useLocation } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type OptionLinkType = {
  name: string;
  link: string;
};

const options: OptionLinkType[] = [
  {
    name: "All Characters",
    link: "/",
  },
  {
    name: "Students",
    link: "/students",
  },
  {
    name: "Staff",
    link: "/staff",
  },
];

export const NavMenu: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [selected, setSelected] = useState<OptionLinkType | null>(options[0]);
  const location = useLocation();

  useEffect(() => {
    const selectedItem = options.find(
      (option) => option.link === location.pathname
    );
    if (selectedItem) {
      setSelected(selectedItem);
    } else {
      setSelected(null);
    }
  }, [location]);

  const otherOptions = options.filter(
    (option) => option.name !== selected?.name
  );

  if (isDesktop) {
    return (
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <Link to="/" className={selected?.link === "/" ? "font-bold" : ""}>
              All Charactes
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              to="/students"
              className={selected?.link === "/students" ? "font-bold" : ""}
            >
              Students
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              to="/staff"
              className={selected?.link === "/staff" ? "font-bold" : ""}
            >
              Staff
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {selected?.name ?? "All characters"}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {otherOptions.map((option) => (
          <Link key={option.name} to={option.link}>
            <DropdownMenuItem>{option.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
