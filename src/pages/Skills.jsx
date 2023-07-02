import {DiRuby} from 'react-icons/di'
import Box from '../components/Box'
import { otherSkills } from '../data'

const technologies = [
  {
    title: "React",
    about: "I have interacted with React throughout my learning journey and got to learn more about its extensive external libraries support that complement it such as headless-ui for creating reusable components and even styling libraries like Material UI icons. As a technology it has improved perfomances thanks to Virtual DOM and not forgetting the JSX syntax that allows us to write HTML-like code within javascript. I am really eager to continue pursuing this library to learn more and keep up with its new features. "
  },
  {
    title: "Redux",
    about: "When we talk about interactivity, state has to be in the picture. And when prop-drilling in react may seem to be a headache, redux is always there to save the day. A state managment library solely build for mantaining state when scalability concerns arise. i have learned the library and am continuously learning it to improve my skills and know its best usecases."
  },
  {
    title: "React Router DOM",
    about: "SPAs are the new way to go as UX is continuously being improved with invention of new technologies. React-router-dom handls routing even without the page blinking or reloading. It has great features such as the Outlet component, useRouter and useLoader hooks which just make it a fascinating library to learn and continuusly interact with. "
  },
  {
    title: "Tailwind CSS",
    about: "Styling inside the component files themselves without the need to create an extra file to me was a major plus. its shortened classnames and extra configurations in its Tailwind.config file is a plus to me. i continuously continue to learn this technology and embrace its power. "
  },
  {
    title: "Javascript",
    about: "Ofcourse most of these wouldnt be possible if the language itself that regulates the syntax we use for coding in react didin't exist. I constantly visit their documentation to be able to improve my skill and expertise and am really eager to grow in this field. i have taken additional steps to start learning TypeScript as it helps write cleaner code which is my sole goal. i have also tried Node Js, the engine behind javascript and am in the beginner phase of doing fullStack web development. i have even had the chance to try out Next JS and seen its page routing capabilities as well as authentication handling through the NextAuth JS library.  "
  }
]

const Skills = () => {
  return (
    <Box className='relative bg-slate-800 '>
      <div className=" top-4 flex overflow-y-auto  ">
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5 " >
          <div className='flex justify-center items-center'>
            <DiRuby size={400}/>
          </div>
        </div>
        <div className=' flex flex-col space-y-4  w-11/12  rounded-lg px-4 py-8   '>
          <div className='relative flex flex-col space-y-8 overflow-hidden'>
            <div className=' pb-4'>
              <h1 className='text-2xl font-serif'>
                Web development Technologies
              </h1>
            </div>
            <div className='flex flex-col overflow-y-auto space-y-4 pb-4'>
              {technologies.map((t) => (
                <div key={t.title}>
                  <dt className="text-2xl font-medium text-blue-700 sm:w-40 sm:flex-shrink-0">
                    {t.title}
                  </dt>
                  <dd className="mt-1 text-lg sm:col-span-2 text-neutral-500">
                    {t.about}
                  </dd>
                </div>
              ))}

            </div>
            
          </div>
          <div className='flex flex-col space-y-4 '>
            <h1 className='text-2xl font-serif pb-4'>Other Skills</h1>
            {otherSkills.map((os) => (
              <div key={os.title}>
                <dt className="text-2xl font-medium text-blue-700 sm:w-40 sm:flex-shrink-0 ">
                    {os.title}
                  </dt>
                  <dd className="mt-1 text-lg sm:col-span-2 text-neutral-500">
                    {os.about}
                  </dd>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </Box>
  )
}

export default Skills