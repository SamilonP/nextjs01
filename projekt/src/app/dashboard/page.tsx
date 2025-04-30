"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Main from '@/components/main'
import Game from '@/components/game'
import Insert from '@/components/insert'

export default function Dashboard() {
  const [games, setGames] = useState([])
  const [filteredGame, setFilter] = useState([])

  const handleIDchange = (id: number) => {
    console.log(id)
    setFilter(games[id - 1])
  }
  const fetchdata = async () => {
    const res = await fetch('/api/games')
    const data = await res.json()
    setGames(data)
    setFilter(data[0])
  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div className='w-full max-h-screen h-full'>
      <Navbar></Navbar>
      
      <div className='flex items-center w-full h-full'>
        <Insert></Insert>
        <Main games={games} onIDchange={handleIDchange}></Main>
        <Game game={filteredGame}></Game>
      </div>
      
    </div>
  )
}
