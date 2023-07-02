
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import { AiFillFolder, AiFillSketchCircle } from 'react-icons/ai'
import { FiHeadphones } from 'react-icons/fi'
import { FaHotjar } from 'react-icons/fa'

const routes = [
  {
    icon: AiFillFolder,
    label: 'Projects',
    href: '/projects'
  },
  {
    icon: AiFillSketchCircle,
    label: 'Skills',
    href: '/skills'
  },
  {
    icon: FiHeadphones,
    label: 'Hobbies',
    href: "/hobbies"
  },
  {
    icon: FaHotjar,
    label: 'Ambitions',
    href: '/ambitions'
  }
]

const Layout = () => {
  return (
    <div className=' bg-gradient-to-b  from-blue-800 flex h-[100vh] w-screen pb-4 mb-5'>
      <div className='hidden md:flex flex-col gap-y-2 bg-gradient-to-b  bg-blue-800 h-full w-[300px] p-2'>
      <Navbar routes={routes}/>
      </div>
      {/* mobile view Navbar */}
      <div className='md:hidden flex top-0 right-0 absolute py-2 px-4 w-full flex-shrink-0'>
        <MobileNavbar routes={routes}/>
      </div>
      <main className='flex-1 overflow-y-auto pt-[140px] md:pt-6 px-6'>
        <Outlet />
      </main>

    </div>
  )
}

export default Layout