"use client"
import React, { useState } from 'react'

function Insert({ onDelete }) {
  const inputClass = "bg-amber-500 mt-5 mb-5"
  const[id, setId] = useState("")

  const handleDelete = async (e) => {
    e.preventDefault()
    const res = await fetch("/api/games", {headers: {"Content-type": "application/json"}, method: "delete", body: JSON.stringify({id})})
    const data = await res.json()
    onDelete()
  }

  return (
    <div className='bg-amber-300 w-70 h-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
      <p className='font-black text-3xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-5'>Delete game</p>
      <form onSubmit={handleDelete} className='flex flex-col justify-center align-middle'>
        <input type="text" name="id" className={inputClass} placeholder='Game Id' onChange={(e) => setId(e.target.value)}/>
        <input type="submit" className='bg-amber-700 mt-5' value="Delete Game"/>
      </form>
    </div>
  )
}

export default Insert