"use client"
import React, { useState } from 'react'


function Insert() {
  const inputClass = "bg-amber-500 mt-5 mb-5"
  const[title, setTitle] = useState("")
  const[description, setDescription] = useState("")
  const[image, setImage] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/games", {headers: {"Content-type": "application/json"}, method: "post", body: JSON.stringify({title, description, image})})
    const data = await res.json()
    console.log(data)
  }

  return (
    <div className='bg-amber-300 w-70 h-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
      <p className='font-black text-3xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-5'>Create game</p>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center align-middle'>
        <input type="text" name="title" className={inputClass} placeholder='Game Title' onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" name="description" className={inputClass} placeholder='Game Description' onChange={(e) => setDescription(e.target.value)}/>
        <input type="text" name="image" className={inputClass} placeholder='Image' onChange={(e) => setImage(e.target.value)}/>
        <input type="submit" className='bg-amber-700 mt-5' value="Submit Game"/>
      </form>
    </div>
  )
}

export default Insert