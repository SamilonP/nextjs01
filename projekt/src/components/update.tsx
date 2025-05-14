"use client"
import React, { useState } from 'react'

function Insert({ onUpdate }) {
  const inputClass = "bg-amber-500 mt-5 mb-5"
  const[title, setTitle] = useState("")
  const[description, setDesc] = useState("")
  const[image, setImage] = useState("")
  const[id, setId] = useState("")

  const handleUpdate = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/games", {headers: {"Content-type": "application/json"}, method: "put", body: JSON.stringify({title, description, image, id})})
    const data = await res.json()
    onUpdate()
  }

  return (
    <div className='bg-amber-300 w-70 h-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
      <p className='font-black text-3xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-5'>Update game</p>
      <form onSubmit={handleUpdate} className='flex flex-col justify-center align-middle'>
        <input type="text" name="title" className={inputClass} placeholder='New title' onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" name="description" className={inputClass} placeholder='New description' onChange={(e) => setDesc(e.target.value)}/>
        <input type="text" name="image" className={inputClass} placeholder='New image' onChange={(e) => setImage(e.target.value)}/>
        <input type="text" name="id" className={inputClass} placeholder='Game Id' onChange={(e) => setId(e.target.value)}/>
        <input type="submit" className='bg-amber-700 mt-5' value="Submit"/>
      </form>
    </div>
  )
}

export default Insert