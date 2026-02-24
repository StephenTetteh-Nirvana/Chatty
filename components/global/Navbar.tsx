import { SidebarTrigger } from "../ui/sidebar"
import { Bell } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback  } from "../ui/avatar";

const Navbar = () => {
    return (
      <div className="w-full h-13 bg-white border-b border-slate-300 flex items-center px-4 justify-between">
        <SidebarTrigger/>
        <div className="flex gap-2 items-center">
          <Bell/>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    )
}

export default Navbar;