import Box from "./components/Box"
import SlideItem from "./components/SlideItem"
const slides = [
  {
    title: "Introduction",
    description: "Hello and welcome to my portfolio! I am a passionate and dedicated web developer. With a background as an electrician, and many other technical skills I have embarked on a journey of self-learning and skill development in web development over the past six months. I am thrilled to showcase my abilities, growth, and determination as I transition into this exciting new field."
  },
  {
    title: "About",
    description: "I am an aspiring developer looking forward to make a future by solving world problems through technology and puttng Africa on the tech map."
  },
  {
    title: "Ambition And Commitment",
    description: "As someone shifting fields, I recognize the importance of collaboration and teamwork. I believe that collective effort, diverse perspectives, and effective communication are key to achieving outstanding results. I am excited to contribute to a team environment where I can share my skills and ideas while also learning from experienced professionals. I thrive in collaborative settings and value the opportunity to grow alongside talented individuals."
  },
  {
    title: "Growth Mindset",
    description: "Throughout my journey as a training web developer, I have cultivated a growth mindset. I embrace challenges as opportunities for personal and professional development, and I am always seeking ways to enhance my skills and expand my knowledge base. I am open to feedback, adaptable to new technologies, and continuously strive to stay up-to-date with industry trends. I believe that with perseverance and a passion for learning, there is no limit to what I can achieve."
  },
  {
    title: "Dedication to Quality",
    description: "I am committed to delivering high-quality work and exceeding expectations. Attention to detail, clean code practices, and learning user-centric design are at the core of my development philosophy. I am eager to be a part of a team that creates intuitive and visually appealing web experiences that not only meet the needs of users but also leave a lasting impression. I am driven by the desire to create solutions that are both functional and aesthetically pleasing."
  }
]
const Portfolio = () => {
  return (
    <Box className='min-w-fit h-full rounded-2xl bg-slate-500 flex-grow pb-4 opacity-75 overflow-y-auto '>
      <div className="relative flex flex-col gap-y-4 pt-6">
        <div className="flex justify-center w-[200px] h-[200px] bg-white rounded-xl m-auto object-cover overflow-hidden">
          <img src="https://avatars.githubusercontent.com/u/133527315?s=96&v=4" alt="profile" className='' />
        </div>
        <div className="text-5xl flex flex-col m-auto gap-y-4  justify-center py-4 ">
          <h1>Fredrick Kamau</h1>
          <h2>React JS Developer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-blue-800 text-xl mx-4">
          {slides.map((item) => (
            <SlideItem 
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Box>
  )
}

export default Portfolio