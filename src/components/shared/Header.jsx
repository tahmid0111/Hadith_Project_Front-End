import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className="nav-area ">

      <ul className='flex flex-row text-center'>

        <li className='basis-2/4'><Link to='/'>Home</Link></li>
        <li className='basis-2/4'><Link to='/random'>Random Hadith</Link></li>

      </ul>

    </nav>
    </>
  )
}

export default Header
