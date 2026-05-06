import React, { useState } from 'react'
import { Eye, EyeOff, Search } from 'lucide-react';

export default function Input({
    onChange,
    leftIcon,
    children,
    className = "",
    inputClass = "min-h-11.5 md:min-h-13",
    labelClass = "text-sm",
    type = "text",
    label,
    placeholder,
    error,
    id,
    name,
    required
}) {
    const [newType, setNewType] = useState(type);
    const handleChange = () => {
        setNewType((prev) => prev === 'password' ? 'text' : 'password')
    }
    const [newValue, setNewValue] = useState('');
    const onchange = (e) => {
        setNewValue(e.target.value);
        onChange?.();
    }
    const common_class = `${type === 'search' || leftIcon ? 'px-10' : 'px-4'} w-full font-medium text-sm text-para placeholder:text-para/80 border border-solid border-white/10 bg-white/2 resize-none rounded-full placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-2 focus:placeholder:opacity-0 ring ring-transparent focus:ring-primary/30`
    return (
        <div className={`flex flex-col gap-y-2 ${className}`}>
            {label &&
                <label htmlFor="" className={`block font-normal uppercase text-white leading-relaxed ${labelClass}`}>
                    {label}
                </label>
            }
            {type === 'textarea' ?
                <textarea
                    onChange={onchange}
                    name={name}
                    value={newValue}
                    id={id}
                    placeholder={placeholder}
                    required={required}
                    className={`${common_class} min-h-25 ${inputClass}`}
                />
                :
                <div className="relative">
                    {leftIcon &&
                        <span className='absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4 pointer-events-none'>{leftIcon}</span>
                    }
                    {children && children}
                    {type === 'search' &&
                        <span className='absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4'>
                            <Search />
                        </span>
                    }
                    <input
                        type={newType}
                        onChange={onchange}
                        value={newValue}
                        name={name}
                        id={id}
                        className={`${common_class} ${inputClass}`}
                        placeholder={placeholder}
                        required={required} />
                    {type === 'password' &&
                        <button onClick={() => handleChange()} className='absolute top-1/2 -translate-y-1/2 right-0 px-3'>
                            {newType === 'password' ? <Eye className='size-5' /> : <EyeOff className='size-5' />}
                        </button>
                    }
                </div>
            }
            {error &&
                <span className='text-sm leading-normal font-normal text-red-400 -mt-1'>{error}</span>
            }
        </div>
    )
}
