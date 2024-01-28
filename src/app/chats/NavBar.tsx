import Link from "next/link";
import Image from "next/image"

import logo from "../../assets/logo.png"

export default function NavBar() {
    return(
        <div className="p-4 shadow">
            <div className="max-w-7xl m-auto flex flex-wrap gap-3 items-center justify-between">
               <Link href= "/chats" className="flex items-center gap-1">
                <Image src={logo} alt="Pathfinders logo" className= "width={40} height={40}"  />
                <span className="font-bold">Pathfinders</span>
               </Link>
                 
            </div>    
            
        </div>
    )
}