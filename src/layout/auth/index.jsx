import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <div className='min-h-screen min-w-full flex flex-col'>
            <div className="max-w-150 w-full rounded-xl bg-white/2 border border-solid border-white/10 p-4 m-auto">
                <Outlet />
            </div>
        </div>
    )
}
