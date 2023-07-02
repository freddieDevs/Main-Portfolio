
import React from "react";
import { twMerge } from "tailwind-merge"

interface BoxProps {
  className?: string;
  children: React.ReactNode
}

const Box = ({className, children}) => {
  return (
    // eslint-disable-next-line no-undef
    <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}>
      {children}
    </div>
  )
}

export default Box