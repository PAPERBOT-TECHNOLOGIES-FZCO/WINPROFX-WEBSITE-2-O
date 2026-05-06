import React from 'react'

export default function Card({ children }) {
    return (
        <div className='card-bg-gradient max-w-280 mx-auto backdrop-blur-2xl border border-solid border-white/8 rounded-2xl p-4 md:p-6 lg:-8 mb-8 md:mb-12 lg:mb-17 xl:mb-22'>
            {children}
        </div>
    )
}
