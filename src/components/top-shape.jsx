import React from 'react'
import img from '@/assets/img/top-shape.png'

export default function TopShape() {
    return (
        <div className='absolute top-0 left-0 w-full z-10 pointer-events-none'>
            <img src={img} className='blur-[140px]' alt="" />
        </div>
    )
}
