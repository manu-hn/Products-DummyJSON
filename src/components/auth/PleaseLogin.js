import React from 'react'
import { Link } from 'react-router-dom'

const PleaseLogin = () => {
  return (
    <div className='flex m-8 justify-center flex-col items-center'>
        <h1>Please Login to Continue</h1>
        <Link to={'/auth'}><button className='bg-blue-500 px-8 py-1 rounded-md mt-8'>Login</button></Link>
    </div>
  )
}

export default PleaseLogin