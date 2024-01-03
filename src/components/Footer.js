import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full bg-black flex justify-around p-8'>
            <div>
                <ul className='text-gray-200 font-semibold text-sm'>
                    <li>ProductsCart Private Limited</li>
                    <li>Bengaluru </li>
                    <li>Karnataka, India</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='text-gray-200 text-xs my-1'><Link to={"/"}>FB</Link></li>
                    <li className='text-gray-200 text-xs my-1'><Link to={"/"}>Twitter</Link></li>
                    <li className='text-gray-200 text-xs my-1'><Link to={"/"}>Instagram</Link></li>
                    <li className='text-gray-200 text-xs my-1'><Link to={"/"}>LinkedIn</Link></li>
                </ul>
            </div>
        </footer >
    )
}

export default Footer