import {AiFillFolderOpen} from 'react-icons/ai'
import Carousel from '../components/Carousel'
import Box from '../components/Box'



const works = [
  {
    // image: ,
    title: 'Project Router',
    link: 'https://vercel.com',
    description: 'The project is about a company that hires vans for people to go on vacations and holiday trips. The project follows a tutorial and gets to use the useLoader hooks for asyncronous handling the new createBrowserRouter hook and styling is in Tailwind. ',
    lessons: 'I got to learn how to do asynchronous handling of requests, redirecting once logged in, using the recommended errorElement to handle errrors from the API requests in the Route components. i also learnt the use of loaders for a better user experience. i also learnt how one could load data out of the functional component and the use the useLoader data hook to access the data. in tailwind i learnt conditional styling of components to show the active states when in view. '
  },
  {
    // image: ,
    title: "Messanger-clone",
    link: 'https://vercel.com',
    description: 'The project is done in Next js and is a fullstack one. The project was a youtube tutorial and it uses Next Js-for routing, Prisma-for creating database tables in MongoDB, NextAuth Js-for authentication, Tailwind CSS for styling and Typescript JS for typesafety ',
    lessons: 'Through the project i had a lot of challenges due to my low CPU laptop but i pursued it anyway. During development it was really slow due to compilation and routing was a bit slow. I prefer handling routing through react router dom. However the ability to write frontend and backend code in the same file folder was really fascinating. The slow development was a major drawback, but all in all i got to learn how to generate tables and relations using prisma. Using pusher to add realtime features. Creating reusable buttons and modals using Headless-ui library, using Zustand to create custom toggles for the modals. The use of clxs to create default variants for buttons. '
  },
  {
    // image: ,
    title: 'Phone-Shopping',
    link: 'https://vercel.com',
    description: 'The project is an e-commerce app done with redux as the state management store. The project was a tutorial on learning react and it also uses bare css styling.',
    lessons: 'I learnt how to create global variables for styling using CSS alone. The project was responsive in a really simple way. There was use of custom svg icons as another option for icons. The project had steep learning curve with the use of the redux js toolkit that has all hooks available for creating a store and the thunks and slices. i got to learn the useSelector hook to access the redux state and useDispatch hook to access the dispatch functions.'
  },
  {
    title: "Fullstack(MERNG)-Chatting App",
    description: "The app is tutorial-based and is a fullstack web app that utilizes MongoDB, Apollo Server, mongoose and Node Js on the backend. In the frontend it uses React and apollo client. ",
    lessons: "From the project i learnt how to set up and connect to the database from the backend and frontend, instantiating apollo server and starting it, using schema and model from mongoose to create models from schema and creating type definitions and resolvers to create resolvers to handle logic from the backend. In the frontend, using Apollo Client i learnt how to use a context proviider to handle authentication logic. i also learnt to create custom hooks to handle form logic  such as onSubmit and onChange. I also got to use graphql to perform queries and using the InMemoryCache by Apollo Client. I got use the ApolloLink to create an authMiddleware that adds headers obtained from tokens to request to validate backend access. It was indeed a knowledge-rich project full of challenges as most of the code used in the video needed to be updated to match current trends. But all in all it was a great tutorial to undertake."
  }
];




const Projects = () => {
  return (
    <>
      <div className="relative ">
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5 " >
          <div className='flex justify-center items-center '>
            <AiFillFolderOpen size={400}/>
          </div>
        </div>
      </div>
      <div className='flex max-w-lg p-4 justify-center items-center md:pl-16  h-auto sm:mt-8'>
        <Carousel>
          {works.map((w) => (
           <div key={w.title} className='max-w-full flex  justify-center items-center'>
              {/* <img src={s} key={s} className='rounded-lg '/> */}
              <Box className='w-[432px] lg:w-[432px] h-full sm:w-[480px] justify-center items-center bg-transparent opacity-50 p-4 overflow-y-auto'>
                <div className='flex flex-col items-center justify-center px-10 py-5'>
                  <h1 className='text-3xl pb-4 font-semibold'>
                    {w.title}
                  </h1>
                  <p className='text-lg'>{w.description}</p>
                  <h2 className='my-4 font-medium text-xl'>
                    Lessons Learnt
                  </h2>
                  <p className='text-lg'>{w.lessons}</p>
                </div>
              </Box>
              
           </div>
          ))}
        </Carousel>
      </div>
     
    </>
  )
}

export default Projects