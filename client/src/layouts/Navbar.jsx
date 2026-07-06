import { Search, Bell, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h1 className="text-xl font-bold">
        Job Recruitment Platform
      </h1>

      <div className="flex items-center gap-5">
        <Search className="cursor-pointer" />
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;