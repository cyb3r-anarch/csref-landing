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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex w-96 gap-x-5  px-6 py-3 border rounded-lg shadow-md bg-blue-400/10"
    >
      <motion.img
        style={{ maxHeight: "48px" }}
        src={icon}
        alt=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </motion.div>
    </motion.div>

  </>
  )
}

export default Card