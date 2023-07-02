import clsx from 'clsx';
import React from 'react';
import { FC } from 'react'
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface MobileNavbarItemProps {
  icon: IconType;
  label: string;
  href: string
}


const MobileNavbarItem: FC<MobileNavbarItemProps> = ({
  icon: Icon,
  label,
  href
}) => {
  return (
    
  <NavLink to={href} className={clsx('flex flex-col h-auto items-center w-full gap-x-2 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 flex-shrink rounded-md')}>
    <div className="w-6 h-6 flex items-center justify-center">{<Icon size={26} />}</div>
    <p className=" w-full">{label}</p>
  </NavLink>
    
  )
  
}

export default MobileNavbarItem