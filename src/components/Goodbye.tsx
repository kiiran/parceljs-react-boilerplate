import React from 'react'
import { Link } from '@reach/router'
import { ReachRouterComponent } from '~types'

const Hello: ReachRouterComponent = () => {
  return (
    <div>
      <h1>See ya, then!</h1>
      <Link to="/">Oh, actually, I forgot my keys</Link>
    </div>
  )
}

export default Hello
