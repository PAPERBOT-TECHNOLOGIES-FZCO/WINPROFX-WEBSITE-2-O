import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { RiArrowLeftLongLine } from "react-icons/ri";
import SeoHead from '@/components/seo-head'

export default function Error() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <SeoHead
                title="Page Not Found | WINPROFX"
                canonicalPath={pathname}
                robots="noindex, nofollow"
            />
            <h2 className='text-5xl leading-normal'>Page Not Found</h2>
            <button onClick={() => navigate(-1)} className="btn mt-4 md:mt-6 lg:mt-8 heading-btn active py-3 px-6 flex items-center gap-x-4">
                <RiArrowLeftLongLine /> Back Top Home
            </button>
        </div>
    )
}
