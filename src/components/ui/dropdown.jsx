import { useState, useEffect, useRef } from 'react'
import { ArrowDown } from '../../utilities/icons';
import { AnimatePresence, motion } from 'framer-motion'

export default function Dropdown({ onClick,
  className = "",
  label,
  labelClass = 'text-sm',
  required,
  items = [],
  placeholder,
  btnClass = "min-h-13",
  dropdownClass = "left-0 w-full",
  dropdownPosition = "bottom"
}) {
  const [defaultItem, setDefaultItem] = useState('')

  useEffect(() => {
    setDefaultItem(typeof placeholder === 'string' ? { name: placeholder } : placeholder || { name: 'Select' })
  }, [placeholder])

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }
  const selectItem = (item) => {
    setDefaultItem(item);
    setIsOpen(false)
    onClick?.();
  }

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className={`flex flex-col gap-y-2 ${className}`}>
      {label &&
        <label htmlFor="" className={`block font-normal uppercase text-white leading-normal ${labelClass}`}>
          {label} {required && '*'}
        </label>
      }
      <div className="relative">
        <button onClick={toggleDropdown} className={`w-full px-4 border border-solid border-white/24 rounded-full flex items-center gap-2 justify-between font-medium text-sm bg-main-bg/24 text-white ${btnClass}`}>
          <span className="flex items-center gap-2">
            {/* {defaultItem.icon &&
              <span className='size-5.5 rounded-full overflow-hidden'>
                {defaultItem.code ?
                  <span className='bg-[#7281F0] size-full flex items-center justify-center text-sm text-white'>{defaultItem.icon}</span>
                  :
                  <img src={defaultItem.icon} className=' w-full h-full object-cover' alt="" />
                }
              </span>
            } */}
            <span className='line-clamp-1 text-left'>
              {defaultItem.name}
            </span>
          </span>
          <span className={`flex-none ${isOpen ? '-scale-y-100' : 'scale-y-100'}`}>
            <ArrowDown />
          </span>
        </button>

        <AnimatePresence>
          {isOpen &&
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: .2, delay: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`absolute ${dropdownPosition === 'top' ? 'bottom-full' : 'top-full'} border border-solid border-white/24 border-t-0 bg-main-bg/98 backdrop-blur-2xl rounded-xl px-2 py-3 max-h-50 overflow-y-auto z-1 ${dropdownClass}`}>
              {items.map((item, index) => (
                <button onClick={() => selectItem(item)} className={`flex items-center w-full gap-2 py-2.5 px-4 rounded-full text-sm hover:bg-white/10 font-medium ${item.name === defaultItem.name ? 'bg-white/7 text-white' : 'bg-transparent text-white'}`} key={index}>
                  {/* {item.icon &&
                    <span className='size-5.5 rounded-full overflow-hidden'>
                      {item.code ?
                        <span className='bg-[#7281F0] size-full flex items-center justify-center text-sm text-white'>{item.icon}</span>
                        :
                        <img src={item.icon} className=' w-full h-full object-cover' alt="" />
                      }
                    </span>
                  } */}
                  <span className='line-clamp-1'>{item.name}</span>
                </button>
              ))}
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </div>
  )
}
