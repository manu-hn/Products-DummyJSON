import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = () => {
  return (
    <div>
        <Link to={"/"}> <button className='border bg-blue-100 px-6 py-2'>Go Home 🔙</button> </Link>
    </div>
  )
}

export default BackToHome