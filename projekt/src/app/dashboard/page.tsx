"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import Main from '@/components/main'
import Game from '@/components/game'
import Insert from '@/components/insert'
import Delete from '@/components/delete'
import Update from '@/components/update'

export default function Dashboard() {
  const [games, setGames] = useState([])
  const [filteredGame, setFilter] = useState()
  const [isDisabled, setDisabled] = useState(false)
  const [isDDisabled, setDDisabled] = useState(false)
  const [isUDisabled, setUDisabled] = useState(false)
  

  const handleIDchange = (id: number) => {
    setFilter(games.find(a => a.id == id))
  }
  const handleDisable = () => {
    setDisabled(!isDisabled)
  }
  const handleUDisable = () => {
    setUDisabled(!isUDisabled)
  }
  const handleDDisable = () => {
    setDDisabled(!isDDisabled)
  }
  const handleFetch = () => {
    fetchdata()
  }

  const fetchdata = async () => {
    setDisabled(false)
    setDDisabled(false)
    setUDisabled(false)

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
      <Navbar toggleInsert={handleDisable} toggleDelete={handleDDisable} toggleUpdate={handleUDisable}></Navbar>

      <div className='flex items-center w-full h-full'>
        { isUDisabled && <Update onUpdate={handleFetch}></Update>}
        { isDisabled && <Insert onInsert={handleFetch}></Insert>}
        { isDDisabled && <Delete onDelete={handleFetch}></Delete>}
        <Main games={games} onIDchange={handleIDchange}></Main>
        <Game game={filteredGame}></Game>
      </div>
      
    </div>
  )
}
