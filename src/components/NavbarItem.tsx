import React from "react"
import { IconType } from "react-icons"
import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface NavbarItemProps {
  icon: IconType;
  label: string;
  href: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({icon: Icon, label, href}) => {
  return (
    <nav id="navbar">
      <NavLink className={twMerge(`flex flex-row h-auto items-center w-full gap-x-6 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1  rounded-md`)} to={href} >
        <div className="w-6 h-6 flex items-center justify-center">{<Icon size={26} />}</div>
        <p className="truncate w-full">{label}</p>
      </NavLink>
    </nav>
  )
}

export default NavbarItem