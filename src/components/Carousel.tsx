
import React, { useState } from "react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

type CarouselProps = {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({children: slides}) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr )=> (curr === 0 ? slides.length - 1 : curr - 1))

  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  return (
    <div className="overflow-hidden relative ">
      <div className="flex transition-transform ease-out duration-500 " style={{transform: `translateX(-${curr * 100}%)`}}>
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev}
        className="p-1 rounded-full shadow  opacity-50 text-gray-200 hover:bg-neutral-300  hover:text-blue-800">
          <BsChevronLeft size={30} />
        </button>
        <button onClick={next}
        className="p-1 rounded-full shadow  opacity-50 text-gray-200 hover:bg-neutral-300  hover:text-blue-800">
          <BsChevronRight size={30} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;