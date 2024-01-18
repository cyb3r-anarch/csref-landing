import React from 'react'
import icon from '../assets/icon.png'
import { motion } from 'framer-motion';

interface CardProps{
  title: string;
  description: string;
}


function Card({title, description}: CardProps) {
  return (
  <>
    <div
      className={"flex w-96 gap-x-5  px-6 py-3 border rounded-lg shadow-md bg-blue-400/10 scale-up-bottom"}
    >
      <img
        style={{ maxHeight: "48px" }}
        src={icon}
        alt=""
      />
      <div
        className="flex flex-col"
      >
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </div>

  </>
  )
}

export default Card