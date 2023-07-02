import React from 'react';
import { IconType } from 'react-icons';
import {IoIosMenu } from 'react-icons/io'
import MobileNavbarItem from './MobileNavbarItem';
import { NavLink } from 'react-router-dom';
import HomeLink from './HomeLink';

interface Route {
  icon: IconType;
  label: string;
  href: string;
}

interface MobileNavbarProps {
  routes: Route[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  routes
}) => {
  

  return (
    <>
      <div className='flex flex-row-reverse  min-w-full justify-between  flex-wrap '>
        {/* <button onClick={() => {}}>
          <div className='mx-2'>
            <div>
              <IoIosMenu size={40}/>
            </div>
          </div>
        </button> */}
        <div className='flex fixed bg-blue-900 flex-row-reverse h-16 w-full top-0 z-10 justify-between'>
          <div className='flex flex-row-reverse justify-between flex-wrap '>
            
            <div className='flex space-x-6 flex-1'>
              {routes.map((item) => (
                <MobileNavbarItem 
                  key={item.label}
                  icon={item.icon}
                  href={item.href}
                  label={item.label}
                />
              ))}
              

            </div>
          </div>
          <div className='flex flex-row-reverse flex-end ml-4 '>
            <HomeLink/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNavbar