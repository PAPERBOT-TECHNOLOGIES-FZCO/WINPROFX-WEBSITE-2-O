import React from 'react'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { y, duration, once } from '@/utilities/animation'

export default function Accordion({ items, activeItem = null, desClass = "", }) {
  const [activeIndex, setActiveIndex] = useState(activeItem);
  useEffect(() => setActiveIndex(activeItem), [activeItem])

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: `0.${index * 1}` }}
          viewport={{ once: once, amount: 0.2 }}
          onClick={() => toggleAccordion(index)} key={index} className={`accordion-item relative z-1 cursor-pointer rounded-2xl lg:rounded-3xl border border-solid border-white/8 bg-white/4 overflow-hidden py-4 md:py-5 lg:py-6 px-4 md:px-6 lg:px-8 not-last:mb-4`}>
          <svg className={`absolute bottom-0 right-0 -z-10 pointer-events-none transition-all duration-300 ${activeIndex === index ? 'opacity-80' : 'opacity-0'}`} width="431" height="398" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_4649)">
              <g filter="url(#filter1_f_1_4649)">
                <path d="M234.209 329.226C277.755 237.941 384.953 198.235 473.64 240.542C562.327 282.849 598.921 391.147 555.374 482.433C511.827 573.719 467.08 473.89 378.393 431.584C289.706 389.278 190.663 420.512 234.209 329.226Z" fill="url(#paint0_radial_1_4649)" />
              </g>
            </g>
            <defs>
              <filter id="filter0_f_1_4649" x="-1.52588e-05" y="0.000106812" width="797.338" height="743.319" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="111.805" result="effect1_foregroundBlur_1_4649" />
              </filter>
              <filter id="filter1_f_1_4649" x="129.61" y="129.61" width="538.118" height="484.099" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_1_4649" />
              </filter>
              <radialGradient id="paint0_radial_1_4649" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(422.501 347.745) rotate(121.07) scale(194.943 292.012)">
                <stop stopColor="#00D9FF" />
                <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          <button className={`accordion-button transition-none text-white-color font-satoshi font-medium text-start flex items-center justify-between w-full bg-transparent border-0 text-lg md:text-xl leading-tight ${activeIndex === index ? "" : ""}`}>
            <span>{item.title}</span>
            {activeIndex != index ? (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12C24 11.4237 23.5328 10.9565 22.9565 10.9565H15.0435C13.9389 10.9565 13.0435 10.0611 13.0435 8.95652V1.04348C13.0435 0.467182 12.5763 0 12 0C11.4237 0 10.9565 0.467181 10.9565 1.04348V8.95652C10.9565 10.0611 10.0611 10.9565 8.95652 10.9565H1.04348C0.467182 10.9565 0 11.4237 0 12C0 12.5763 0.467181 13.0435 1.04348 13.0435H8.95652C10.0611 13.0435 10.9565 13.9389 10.9565 15.0435V22.9565C10.9565 23.5328 11.4237 24 12 24C12.5763 24 13.0435 23.5328 13.0435 22.9565V15.0435C13.0435 13.9389 13.9389 13.0435 15.0435 13.0435H22.9565C23.5328 13.0435 24 12.5763 24 12Z" fill="currentColor" />
            </svg>
            ) : (<svg width="20" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0435 0.956543H22.9565C23.5328 0.956543 24 1.42372 24 2.00002C24 2.57632 23.5328 3.0435 22.9565 3.0435H13.0435H10.9565H1.04348C0.467181 3.0435 0 2.57632 0 2.00002C0 1.42372 0.467182 0.956543 1.04348 0.956543H10.9565H13.0435Z" fill="currentColor" />
            </svg>
            )}
          </button>
          <AnimatePresence initial={false} mode="wait">
            {activeIndex === index &&
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden">
                <div
                  className={`accordion-body mt-4 md:mt-5 lg:mt-6 pt-4 md:pt-5 lg:pt-6 border-t border-solid border-white/12 text-sm md:text-base leading-relaxed text-[#ABACB3] flex flex-col gap-y-3 ${desClass}`}
                  dangerouslySetInnerHTML={{ __html: item.body }} />
              </motion.div>
            }
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}