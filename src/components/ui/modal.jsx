import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react';

export default function modal({ children, innerClass = "max-w-125", onClick, modalCondition = false }) {
    return (
        <AnimatePresence mode="wait">
            {modalCondition &&
                <div className='fixed w-full h-screen overflow-y-auto left-0 top-0 z-50 flex justify-center p-4 md:p-6 bg-card/90'>
                    {onClick &&
                        <div className='size-full fixed top-0 left-0 -z-10' onClick={onClick} />
                    }
                    <motion.div
                        initial={{ scale: .9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: .5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className={`overflow-hidden relative z-1 m-auto p-4 md:p-6 w-full bg-[#1F2336] rounded-2xl border md:border-2 border-solid border-solid-primary shadow-[0px_4px_44px_0px_rgba(131,106,233,.60)] ${innerClass}`}>
                        {onClick &&
                            <button className='size-10 flex items-center justify-center absolute top-0 right-0 m-4 md:m-6 bg-[#343856] hover:bg-primary hover:text-white rounded border border-solid border-white/20' onClick={onClick}><X className='size-5' /></button>
                        }
                        {children}
                    </motion.div>
                </div>
            }
        </AnimatePresence>
    )
}
