import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Logo from '@/components/logo';
import LangulageSelect from '@/components/langulage-select'

export default function Header() {
  const navLinks = [
    {
      btn_title: 'Markets',
      to: '',
      children: [
        {
          btn_title: 'Forex',
          to: '/forex'
        },
        {
          btn_title: 'Indices',
          to: '/indices'
        },
        {
          btn_title: 'Crypto',
          to: '/crypto'
        },
        {
          btn_title: 'Metals',
          to: '/trading/metals',
        },
        {
          btn_title: 'Commodities',
          to: '/trading/commodities',
        },
        {
          btn_title: 'Oil',
          to: '/trading/oil',
        },
      ],
    },
    {
      btn_title: 'Trading',
      to: '',
      children: [
        {
          btn_title: 'Platfrom',
          to: '/platform',
        },
        {
          btn_title: 'Accounts',
          to: '/accounts',
        },
      ],
    },
    {
      btn_title: 'Tools',
      to: '',
      children: [
        {
          btn_title: 'Analytics',
          to: '/analytics'
        },
        {
          btn_title: 'Economic Calendar',
          to: '/economic-calendar'
        },
        {
          btn_title: 'Currency Calculator',
          to: '/currency-calculator'
        },
        {
          btn_title: 'Currency Converter',
          to: '/currency-converter'
        },
      ],
    },
    {
      btn_title: 'Insights',
      to: '',
      children: [
        {
          btn_title: 'Blog',
          to: '/blog'
        },
      ],
    },
    {
      btn_title: 'Promotions',
      to: '',
      children: [
        {
          btn_title: 'Promotion',
          to: '/trading/win-promotion',
        },
      ],
    },
    {
      btn_title: 'About Us',
      to: '/about-us',
    },
  ];
  const [active_child, set_active_child] = useState(null);
  const header_ref = useRef()
  // when click outside of menu, close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (header_ref.current && !header_ref.current.contains(event.target)) {
        set_active_child(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [set_active_child]);


  const [isMenu, setIsMenu] = useState(false);
  const handleTouchStart = () => {
    setIsMenu(!isMenu);
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 200;
      setScrolled(isScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, setScrolled]);


  useEffect(() => {
    if (isMenu) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenu])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .3, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        ref={header_ref}
        className={`heading bg-transparent top-0 left-0 z-10 w-full backdrop-blur-xl lg:backdrop-blur-none ${scrolled ? 'fixed' : 'absolute'}`}>
        <div className={`heading-wrap max-w-480 mx-auto flex items-center justify-between p-3 xl:p-4 border border-solid border-white/12 rounded-xl bg-white/2 ${!isMenu ? 'backdrop-blur-lg' : ''}`}>
          <Logo className='xl:ml-2 h-8 md:h-10 lg:h-8 xl:h-10 grow' />

          <nav className={`heading-menu grow lg:flex items-center justify-center ${isMenu ? 'show-menu' : ''}`}>
            <div className="title flex items-center justify-between lg:hidden mb-6 md:mb-8">
              <Logo className='h-10 md:h-14' />
              <button className="heading-toggler" onClick={() => setIsMenu(!isMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col lg:flex-row gap-y-3 md:gap-y-4 lg:items-center">
              {navLinks.map((link, index) => (
                <li key={index} className='block relative z-1'>
                  <Link
                    className="inline-flex items-center justify-center lg:px-1.5 2xl:px-2.5 gap-2 text-base text-white leading-normal hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                    to={link.to}
                    onClick={() => !link.children && window.innerWidth <= 991 && handleTouchStart(link.to)}
                    onMouseEnter={() => set_active_child(index)}
                  >
                    {link.btn_title}
                    {link.children &&
                      <svg className={`${active_child === index ? '-scale-y-100' : 'scale-y-100'} transition-all duration-300`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.96004 4.475L6.70004 7.735C6.31504 8.12 5.68504 8.12 5.30004 7.735L2.04004 4.475" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>}
                  </Link>
                  <AnimatePresence mode='wait'>
                    {(active_child === index && link.children) &&
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="lg:absolute top-full left-0 min-w-full w-max lg:bg-[#05060A]/98 backdrop-blur-lg border lg:border-t-0 border-white/12 rounded-t-xl rounded-b-xl lg:rounded-t-none mt-2 lg:mt-6 py-2">
                        <ul className="flex flex-col gap-2 p-2">
                          {link.children?.map((child, childIndex) => (
                            <li key={childIndex}>
                              <Link
                                onClick={() => { set_active_child(null); setIsMenu(false) }}
                                className="inline-flex items-center justify-center px-2.5 gap-1.5 text-base text-white leading-normal hover:text-primary transition-all duration-300 hover:translate-x-1"
                                to={child.to}
                              >
                                {child.btn_title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    }
                  </AnimatePresence>
                </li>
              ))}
              <li className='md:hidden mt-4'>
                <Link to="/introducing-broker" className='gradient-text-primary text-base font-medium mr-6'>Introducing Broker</Link>
              </li>
              <li className='md:hidden'>
                <a
                  href='https://partner.winprofx.org'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='gradient-text-primary text-base font-medium'
                >
                  Partner Portal
                </a>
              </li>
              <li className="flex lg:hidden items-center gap-4 mt-4 border-t border-solid border-white/10 pt-4">
                <a className='heading-btn grow min-h-12 flex items-center justify-center px-4 text-base text-white font-medium rounded-lg' href='https://my.winprofx.org/login' target='_blank' rel='noopener noreferrer'>Login</a>
                <a className='heading-btn grow active min-h-12 flex items-center justify-center px-4 text-base text-white font-medium rounded-lg' href='https://my.winprofx.org/register' target='_blank' rel='noopener noreferrer'>Register</a>
              </li>
            </ul>
          </nav>

          <div className="heading-actions flex items-center flex-wrap gap-2">
            <Link to="/introducing-broker" className='gradient-text-primary text-base font-medium mr-6 hidden md:block lg:hidden xl:inline-block'>Introducing Broker</Link>
            <a
              href='https://partner.winprofx.org'
              target='_blank'
              rel='noopener noreferrer'
              className='gradient-text-primary text-base font-medium mr-4 hidden lg:inline-block'
            >
              Partner Portal
            </a>
            <LangulageSelect className='flex lg:hidden xl:flex' />
            <a className='heading-btn hidden min-h-10 md:flex items-center justify-center px-4 text-base text-white font-medium rounded-lg' href='https://my.winprofx.org/login' target='_blank' rel='noopener noreferrer'>Login</a>
            <a className='heading-btn hidden active min-h-10 md:flex items-center justify-center px-4 text-base text-white font-medium rounded-lg' href='https://my.winprofx.org/register' target='_blank' rel='noopener noreferrer'>Register</a>

            {/* Mobile menu button */}
            <button className="heading-toggler lg:hidden!" onClick={() => setIsMenu(!isMenu)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6.5 md:size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

          </div>
        </div>
      </motion.header>
    </>
  )
}
