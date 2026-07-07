import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  BarChart3,
  CopyCheck,
} from "lucide-react";

const Sidebar = () => {
  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Jobs",
      path: "/jobs",
      icon: Briefcase,
    },
    // {
    //   name: "Analytics",
    //   path: "/analytics",
    //   icon: BarChart3,
    // },
    {
  name: "Duplicate Review",
  path: "/duplicates",
  icon: CopyCheck, // or Files
}
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6">
        <h2 className="text-xl font-bold">Recruiter</h2>
      </div>

      <nav className="mt-5 flex flex-col">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-4 transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {link.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;