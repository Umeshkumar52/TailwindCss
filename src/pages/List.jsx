import React from 'react'

export default function List({sn,list}) {
  return (
    <div>
      <ul>
        <li>{sn}. {list}</li>
      </ul>
    </div>
  )
}
