import React from 'react'

function Navbar({toggleInsert, toggleDelete, toggleUpdate}) {
  return (
    <nav className='w-full bg-amber-500 text-white h-9 flex items-center justify-between'>
      <p className='pl-3'>Games:t</p>
      <div>
        <button className='pr-3' onClick={() => {
          toggleInsert()
        }}>Toggle create menu</button>
        <button className='pr-3' onClick={() => {
          toggleDelete()
        }}>Toggle delete menu</button>
        <button className='pr-3' onClick={() => {
          toggleUpdate()
        }}>Toggle update menu</button>
      </div>
    </nav>
  )
}

export default Navbar