"use client"
import React from 'react'

function Main({games, onIDchange}) {
  return (
    <div className='bg-amber-500 w-40 h-130 m-10'>
      {games.map(games=> (
          <div>
            <button onClick={() => {
              onIDchange(games.id)
            }}>{games.title}</button>
          </div>
        ))}
    </div>
  )
}

export default Main