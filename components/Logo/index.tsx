import React from 'react'
import logo from './logo.svg'

export { Logo }

function Logo({size, style}: {size: number, style: React.CSSProperties}) {
  return (
    <div
      style={style}
    >
      <img src={logo} height={size} width={size} />
    </div>
  )
}
