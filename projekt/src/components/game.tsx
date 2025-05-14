import React from 'react'

function Game({game}) {
  if (!game) {
    return "no games"
  }

  return (
    <div key={game.id} className='mt-5 flex flex-row'>
      <img src={game.image} className='w-[900px] h-[500px]'/>
      <div className='ml-5'>
        <h1 className='mt-5 font-bold'>{game.title}</h1>
        <h2 className='mt-5'>{game.description}</h2>
        <h2 className='mt-5'>{game.id}</h2>
      </div>
    </div>
  )
}

export default Game