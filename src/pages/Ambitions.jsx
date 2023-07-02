import {GiFlameSpin} from 'react-icons/gi'
import { goals } from '../data'

const Ambitions = () => {
  return (
    <>
    <div className="relative ">
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-5 " >
        <div className='flex justify-center items-center'>
          <GiFlameSpin size={400}/>
        </div>
      </div>
    </div>
    <div className='flex flex-col space-y-4 my-4 top-0'>
      <div className='flex justify-center items-center'> 
        <h1 className='font-serif text-3xl text-neutral-200'>
          Ambitions
        </h1>
      </div>
      <div className='flex flex-col w-11/12 h-auto bg-slate-700 rounded-xl py-4 px-4 mx-auto ring gap-y-4 text-neutral-400'>
        {goals.map((g) => (
          <div key={g.title}>
            <p>{g.about}</p>
          </div>
        ))}
        
      </div>
    </div>
    </>
  )
}

export default Ambitions