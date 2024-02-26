import React from 'react'

export default function Header({tittle}) {
  return (
    <div>
      <header>
        <h1 className='text-xl font-semibold text-yellow-500'>{tittle} throups props</h1>
      </header>
    </div>
  )
}
