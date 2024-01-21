import React from 'react'
import icon from '../assets/icon.png'
import data from '../utils/data.json'

interface CardProps{
  curTheme: string;
  itemKey: number;
}

function Card(this: any, { curTheme, itemKey }: CardProps) {
  // Card Content from JSON file
  const studentFeatures = data.find(obj => obj.student)?.student.features ?? [];
  const engineerFeatures = data.find(obj => obj.engineer)?.engineer.features ?? [];

  const studentTitle = studentFeatures[itemKey]?.title;
  const studentDescription = studentFeatures[itemKey]?.description;

  const engineerTitle = engineerFeatures[itemKey]?.title;
  const engineerDescription = engineerFeatures[itemKey]?.description;

  return (
  <>
    <div className={"flex w-96 gap-x-5  px-6 py-3 border rounded-lg shadow-md bg-blue-400/10 scale-up-bottom fade-in"}>
      <img style={{ maxHeight: "48px" }} src={icon} alt=""/>
      <div className="flex flex-col">
        <h3 className="font-bold text-lg">{curTheme==="student" ? studentTitle : engineerTitle}</h3>
        <p className="text-slate-300">{curTheme==="student" ? studentDescription : engineerDescription}</p>
      </div>
    </div>
  </>
  )
}

export default Card