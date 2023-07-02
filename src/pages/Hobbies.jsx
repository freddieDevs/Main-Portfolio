import {SiMusicbrainz} from 'react-icons/si'
import {FaChess} from 'react-icons/fa'
import {GiIceSkate} from 'react-icons/gi'


const talents= [
  {
    hobby: "Roller-blader",
  },
  {
    hobby: "Footballer",
  },
  {
    hobby: "Chess Player",
  },
  {
    hobby: "Reader",
  }
  
]

const Hobbies = () => {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5 " >
        <div className='flex justify-center items-center'>
          <SiMusicbrainz size={400}/>
        </div>
      </div>
      <div className='absolute top-0 right-0 transform rotate-45 opacity-10'>
        <div className='flex justify-center items-center'>
          <FaChess size={80}/>
        </div>
      </div>
      <div className='absolute top-0 left-0 transform rotate-45 opacity-10'>
        <div className='flex justify-center items-center'>
          <GiIceSkate size={80}/>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center space-y-10 '>
        <h1 className='text-4xl font-serif'>Hobbies</h1>
        <div className=' flex items-center justify-center h-80 w-11/12 rounded-lg bg-slate-900 text-blue-800 font-bold text-lg'>
          <div className=' inline-flex text-5xl'>
            
            <div >
              <ul className='  flex flex-col space-y-4'>
                {talents.map((t) => (
                  <li key={t.hobby}>
                      <span className=''>{t.hobby}</span>
                  </li>

                ))}
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Hobbies