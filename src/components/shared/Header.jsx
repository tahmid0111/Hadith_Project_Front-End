import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/random'>Random Hadith</Link>
    </>
  )
}

export default Header
