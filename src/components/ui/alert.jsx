import React, { useEffect, useState } from 'react'

export default function Alert({ className = "", variant, text }) {
    const [newVariant, setNewVariant] = useState('');

    useEffect(() => {
        const variants = {
            success: 'bg-[#0CB76B]/10 border-[#0CB76B] text-[#0CB76B]',
            danger: 'bg-[#9E002F]/10 border-[#9E002F] text-[#9E002F]',
        }
        setNewVariant(variants[variant] || 'bg-black/10 text-p')
    }, [variant,])

    return (
        <span className={`inline-flex items-center justify-center capitalize text-sm font-normal border border-solid h-[26px] rounded-full px-4 ${newVariant} ${className}`}>
            {text || 'Alert'}
        </span>
    )
}
