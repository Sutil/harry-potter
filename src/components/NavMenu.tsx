import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { Link } from "react-router";

export const NavMenu: React.FC = () => {
  const options = ["All Characters", "Students", "Staff"];

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [selected, setSelected] = useState(options[0]);

  const otherOptions = options.filter((option) => option !== selected);

  if (isDesktop) {
    return (
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <Link to="">
              <NavigationMenuLink>All Charactes</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="">
              <NavigationMenuLink>Students</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="">
              <NavigationMenuLink>Staff</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{selected}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-col">
              {otherOptions.map((option) => (
                <NavigationMenuLink
                  key={option}
                  onClick={() => setSelected(option)}
                  className="p-3 w-64"
                >
                  {option}
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
