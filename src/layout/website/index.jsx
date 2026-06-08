import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import StaticHomeSeo from '@/components/static-home-seo'
import LocaleSync from '@/components/locale-sync'

export default function Index() {
    const pathName = useLocation();
    useEffect(() => { window.scrollTo(0, 0) }, [pathName])
    return (
        <>
            <LocaleSync />
            <StaticHomeSeo />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
