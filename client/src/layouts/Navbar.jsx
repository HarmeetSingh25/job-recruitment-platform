import { Search, Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let naviagte = useNavigate()
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h1 className="text-xl font-bold">
        Job Recruitment Platform
      </h1>

      <div className="flex items-center gap-5">
        <Search className="cursor-pointer" onClick={()=>{
          naviagte("/jobs" )
          
        }} />
        <Bell className="cursor-pointer" onClick={()=>{
          naviagte("/notification" )
          
        }} />
        {/* <User className="cursor-pointer" /> */}
      </div>
    </header>
  );
};

export default Navbar;