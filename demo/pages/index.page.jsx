import React from 'react'
import { Counter } from '../components/Counter'

export { Page }

function Page() {
  return (
    <>
      <h1>Demo: SSR</h1>
      <ul>
        <li>Rendered to HTML?</li>
        <li>Interactive?</li>
      </ul>
      <Counter />
    </>
  )
}
