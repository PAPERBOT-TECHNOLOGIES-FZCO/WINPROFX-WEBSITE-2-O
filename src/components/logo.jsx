import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

export default function Logo({ className = "h-10" }) {
  return (
    <Link className={`logo block cursor-pointer ${className}`} to="/">
      <img src={logo} alt="WINPROFX logo" className='h-full object-contain' />
    </Link>
  )
}
