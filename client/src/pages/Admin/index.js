import React from 'react'
import { Link, Switch, Route, useMatch } from '@chakra-ui/react'

function Admin() {
  return (
    <div>
        <nav>
            <ul className='admin-menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Admin