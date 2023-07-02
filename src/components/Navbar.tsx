
import NavbarItem from './NavbarItem'
import Box from './Box'
import React from 'react';
import { IconType } from 'react-icons';
import HomeLink from './HomeLink';

// const routes = [
//   {
//     icon: AiFillFolder,
//     label: 'Projects',
//     href: '/projects'
//   },
//   {
//     icon: AiFillSketchCircle,
//     label: 'Skills',
//     href: '/skills'
//   },
//   {
//     icon: FiHeadphones,
//     label: 'Hobbies',
//     href: "/hobbies"
//   },
//   {
//     icon: FaHotjar,
//     label: 'Ambitions',
//     href: '/ambitions'
//   }
// ]
interface Route {
  icon: IconType;
  label: string;
  href: string;
}

interface NavbarProps {
  routes: Route[];
}

const Navbar: React.FC<NavbarProps> = ({routes}) => {
  return (
     <Box className='flex flex-col gap-y-4 px-5 py-4 h-full my-10'>
      <div className='flex justify-center h-20'>
        <HomeLink/>
      </div>
      {routes.map ((item) => (
        <NavbarItem 
          key={item.label}
          label={item.label}
          icon={item.icon}
          href={item.href}
        />
      ))}
     </Box>
  )
}

export default Navbar