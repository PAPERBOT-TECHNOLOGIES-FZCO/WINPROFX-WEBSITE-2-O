import React from 'react'
import { CgMoveLeft } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { RiArrowLeftLongLine } from "react-icons/ri";

export default function Error() {
    const navigate = useNavigate()
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h2 className='text-5xl leading-normal'>Page Not Found</h2>
            <button onClick={() => navigate(-1)} className="btn mt-4 md:mt-6 lg:mt-8 heading-btn active py-3 px-6 flex items-center gap-x-4" to={location.pathname}>
                <RiArrowLeftLongLine /> Back Top Home
            </button>
        </div>
    )
}
