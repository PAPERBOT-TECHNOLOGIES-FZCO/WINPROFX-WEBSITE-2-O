import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

export default function Index() {
    const pathName = useLocation();
    useEffect(() => { window.scrollTo(0, 0) }, [pathName])
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
