"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/Courses" && href === "/Courses") ||
    pathname === href ||
    pathname?.startsWith(`/Courses/${href}`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 dark:text-white/70  text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "dark:text-white dark:bg-white/5 dark:hover:bg-white/20 dark:hover:text-white text-black bg-black/5 hover:bg-black/20 hover:text-black",
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500 dark:text-slate-400",
            isActive && "text-black dark:text-white",
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 dark:border-white border-black h-full transition-all",
          isActive && "opacity-100",
        )}
      />
    </button>
  );
};
