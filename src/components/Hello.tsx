import React from 'react'
import { Link } from '@reach/router'
import { ReachRouterComponent } from '~types'

const Hello: ReachRouterComponent = () => {
  return (
    <div>
      <h1>Hello there!</h1>
      <Link to="bye">{`Well, I'm off now`}</Link>
    </div>
  )
}

export default Hello
