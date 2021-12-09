import React from 'react'
import logoVitePluginSsr from './vite-plugin-ssr.svg'
import logoTelefunc from './telefunc.svg'

export { Logo }

function Logo({ size, style, logo }: { size: number; style: React.CSSProperties; logo?: 'telefunc' }) {
  const logoUrl = logo === 'telefunc' ? logoTelefunc : logoVitePluginSsr
  return (
    <img
      src={logoUrl}
      height={size}
      width={size}
      style={{
        verticalAlign: 'middle',
        position: 'relative',
        top: -1,
        ...style,
      }}
    />
  )
}
