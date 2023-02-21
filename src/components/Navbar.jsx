import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <header aria-label="Site Header" className="shadow-sm">
        <div className="mx-auto max-w-screen-xl p-4">
            <div className="flex items-center justify-center gap-4 lg:gap-10">
            <nav aria-label="Site Nav"
                className=" gap-10 flex">
                <Link className={`text-gray-500 ${props.active === 'dashboard' ? 'font-semibold' : ''}`} to="/dashboard">Dashboard</Link>
                <Link className={`text-gray-500 ${props.active === 'table' ? 'font-semibold' : ''}`} to="/table">Data Pendaftar</Link>
                <Link className="text-blue-500" to="/">Log Out</Link>
            </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar