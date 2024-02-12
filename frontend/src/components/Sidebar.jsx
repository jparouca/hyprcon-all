import { ScrollArea } from "@/components/ScrollArea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AppWindow,
  BugPlay,
  Cog,
  Droplet,
  Keyboard,
  Mouse,
  SunMoon,
} from "lucide-react";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
<AppWindow />;

export const SECTIONS = [
  {
    url: "/general",
    label: "General",
    icon: <Cog size={16} />,
  },
  {
    url: "/Appearance",
    label: "Appearance",
    icon: <SunMoon size={16} />,
  },
  {
    url: "/Keyboard",
    label: "Keyboard",
    icon: <Keyboard size={16} />,
  },
  {
    url: "/Mouse",
    label: "Mouse",
    icon: <Mouse size={16} />,
  },
  {
    url: "/Monitor",
    label: "Monitor",
    icon: <AppWindow size={16} />,
  },
  {
    url: "/Misc",
    label: "Misc",
    icon: <BugPlay size={16} />,
  },
];

export const H_SECTIONS = {
  store: {
    url: "/store",
    label: "Store",
    icon: <Cog size={16} />,
  },
  inventory: {
    url: "/inventory",
    label: "Inventory",
    icon: <SunMoon size={16} />,
  },
};

export const Sidebar = ({ title, href, isInner }) => {
  return (
    <ScrollArea
      className={cn(
        "hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r",
        isInner ? "lg:w-80 xl:w-96" : "lg:w-60 xl:w-72",
      )}
    >
      {title && (
        <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold tracking-tight">
              {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
            </div>
          </div>
        </div>
      )}
      <div className="bg-zinc-50 p-3">
        <SideBarItems />
      </div>
    </ScrollArea>
  );
};

export const SideBarItems = () => {
  return (
    <div className="flex w-full flex-col gap-7 text-sm">
      <div className="flex flex-col gap-4">
        <RouterLink
          to={"/"}
          className="link-card inline-flex items-center gap-2 p-2"
        >
          <Droplet className="rounded-full border text-black shadow-sm" />
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-black">
              Hyprcon
            </span>
          </div>
        </RouterLink>
        <div className="flex flex-col gap-1">
          {SECTIONS.map((section, sectionIndex) => (
            <Link
              href={section.url ? section.url : "/debug"}
              key={sectionIndex}
              label={section.label}
              icon={section.icon}
            />
          ))}
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-2 text-sm">
        <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">
          Hyprstore
        </span>
        <div className="flex flex-col gap-1">
          {Object.values(H_SECTIONS).map((h_section, h_sectionIndex) => (
            <Link
              href={h_section.url}
              key={h_sectionIndex}
              label={h_section.label}
              icon={h_section.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export function Link({ href, label, icon }) {
  const pathname = useLocation().pathname;
  let isActive = false;
  if (pathname?.length > 0) {
    const splitPathname = pathname.split("/");
    const currentPathname = splitPathname[1] ?? "";
    isActive = currentPathname === href.split("/")[1];
  }

  return (
    <Button
      variant="link"
      className={cn(
        "group flex items-center justify-between rounded-lg p-2",
        isActive ? "bg-black text-white" : "hover:bg-gray-200",
      )}
    >
      <RouterLink to={href}>
        <span className="flex items-center gap-2">
          {icon}
          <span className={cn("font-medium")}>{label}</span>
        </span>
      </RouterLink>
    </Button>
  );
}
