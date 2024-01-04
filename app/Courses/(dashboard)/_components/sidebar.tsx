import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="min-h-screen border-r flex flex-col overflow-y-auto dark:bg-black bg-white shadow-sm">
      <div className="py-4">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
