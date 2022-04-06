import React from 'react'

export default function Header() {

  const headerStyle = {
    margin: '5%',
    color: '#022851'
  }

  return (
    <div>
      <h1 className='logo' style={headerStyle}>Slice the Pie</h1>
    </div>
  )
}
