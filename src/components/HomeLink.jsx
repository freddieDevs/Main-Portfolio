
import { SiHomeadvisor } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

const HomeLink = () => {
  return (
    <NavLink to='/'>
      <div className='w-12 h-12 flex items-center justify-center hover:bg-neutral-200 hover:text-black rounded-full'>
        <SiHomeadvisor size={28}/>
      </div>
    </NavLink>
  )
}

export default HomeLink