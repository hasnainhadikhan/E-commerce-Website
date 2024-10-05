import React from 'react'

export default function CategoriecChips({category , isChosen ,onClick}) {
  const {name} = category;
  return (
    <div
      onClick={onClick}
     className = {` ${ isChosen ? "bg-purple-700 text-black font-bold border-2 border-purple-300 ": " text-white"
    } 
     text-gray-50 p-2 px-4
      font-mono text-xl ml-5
      cursor-pointer
      hover:bg-purple-700
       rounded-md border border-purple-400 `} 
      >
     <h2>{name}</h2>
      </div>
  )
}
