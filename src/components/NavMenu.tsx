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
  const options = [
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

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [selected, setSelected] = useState(options[0]);

  const otherOptions = options.filter(
    (option) => option.name !== selected.name
  );

  if (isDesktop) {
    return (
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink>All Charactes</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/students">
              <NavigationMenuLink>Students</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/staff">
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
          <NavigationMenuTrigger>{selected.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-col">
              {otherOptions.map((option) => (
                <Link key={option.name} to={option.link} className="w-48 p-3">
                  <NavigationMenuLink onClick={() => setSelected(option)}>
                    {option.name}
                  </NavigationMenuLink>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
