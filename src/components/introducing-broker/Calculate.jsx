import React, { useState, useRef, useCallback } from 'react'
import { Container } from '@/components/grid'
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import image from '@/assets/img/introducing-broker/reward.png'
import icon1 from "@/assets/img/introducing-broker/icon1.svg";
import icon2 from "@/assets/img/introducing-broker/icon2.svg";
import icon3 from "@/assets/img/introducing-broker/icon3.svg";
import shap from "@/assets/img/introducing-broker/shap.png";

function RangeSlider({ label, min, max, value, onChange }) {
    const trackRef = useRef(null)

    const handleInteraction = useCallback((clientX) => {
        const rect = trackRef.current.getBoundingClientRect()
        const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
        onChange(Math.round(min + pct * (max - min)))
    }, [min, max, onChange])

    const handleMouseDown = (e) => {
        handleInteraction(e.clientX)
        const onMove = (e) => handleInteraction(e.clientX)
        const onUp = () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup', onUp)
        }
        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseup', onUp)
    }

    const handleTouchStart = (e) => {
        handleInteraction(e.touches[0].clientX)
        const onMove = (e) => handleInteraction(e.touches[0].clientX)
        const onEnd = () => {
            window.removeEventListener('touchmove', onMove)
            window.removeEventListener('touchend', onEnd)
        }
        window.addEventListener('touchmove', onMove)
        window.addEventListener('touchend', onEnd)
    }

    const pct = ((value - min) / (max - min)) * 100

    return (
        <div>
            <div className='flex items-center justify-between mb-3'>
                <span className='text-sm tracking-widest text-para2 uppercase font-medium'>{label}</span>
                <span className='text-base font-semibold text-primary'>{value}</span>
            </div>
            <div
                ref={trackRef}
                className='relative h-3.5 rounded-full bg-white/10 cursor-pointer'
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div
                    className='absolute left-0 top-0 h-full rounded-full bg-primary pointer-events-none'
                    style={{ width: `${pct}%` }}
                />
                <div
                    className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6.5 h-6.5 rounded-full border-[3px] border-primary bg-[#1a1f2e] cursor-grab active:cursor-grabbing'
                    style={{ left: `${pct}%` }}
                />
            </div>
        </div>
    )
}

export default function Calculate() {
    const [clients, setClients] = useState(500)

    const commissionPerLot = 30
    const totalEarnings = clients * commissionPerLot
    const items = [
        {
            icon: icon1,
            desc: "Apply to become an <span>Introducing Broker </span>",
        },
        {
            icon: icon2,
            desc: "Attract clients by sharing your <span>Referral Link</span>",
        },
        {
            icon: icon3,
            desc: "Receive Daily <span>Commission Payouts</span>",
        },
    ];
    return (
        <section className='common-padding pt-0'>
            <Container>
                <div className='relative flex flex-wrap lg:flex-nowrap gap-6 lg:gap-13 mb-5 lg:mb-8 z-1 rounded-lg lg:rounded-[20px] backdrop-blur-xl p-4 md:p-6 lg:p-10 bg-white/4 border border-solid border-white/10 overflow-hidden'>

                    {/* Left Content */}
                    <div className='grow'>
                        <h2 className='text-2xl md:text-4xl lg:text-5xl max-w-138 mb-4 lg:mb-6 leading-normal'>
                            How Much You Can Earn? Calculate your profit
                        </h2>
                        <p className='max-w-140 text-para2 leading-normal text-sm! md:text-base mb-5 md:mb-8 lg:mb-12'>
                            This advanced commission calculator operates on the basis of Introducing Brokers' client count and their trading volume in lots, providing an accurate reflection of earned commissions.
                        </p>
                        <RangeSlider
                            label="Clients"
                            min={0}
                            max={1000}
                            value={clients}
                            onChange={setClients}
                        />
                    </div>
                    <div className='shrink-0 w-full lg:w-72 relative z-1 rounded-lg lg:rounded-[20px] bg-white/4 border border-solid border-white/10 overflow-hidden'>
                        <div className='p-6 -mb-10'>
                            <h4 className='text-xs tracking-widest text-[#7a8a9a] uppercase font-medium mb-2'>Rewards</h4>
                            <p className='leading-none'>
                                <span className='text-3xl md:text-4xl lg:text-5xl text-primary font-bold'>${commissionPerLot}</span>
                                <span className='text-xs text-[#ABACB3] uppercase ml-2'>Per lot</span>
                            </p>
                        </div>
                        <div className='pointer-events-none'>
                            <img src={image} alt="" className="w-full object-cover object-center" />
                        </div>
                    </div>

                </div>

                <div className='become-area rounded-lg lg:rounded-[20px] backdrop-blur-xl p-4 md:p-6 lg:p-10 bg-white/4 border border-solid border-white/10 overflow-hidden'>
                    <div className='mb-5 lg:mb-10'>
                        <div className='flex flex-wrap lg:flex-nowrap gap-3 lg:gap-8 '>
                            <h2 className='grow text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-normal'>
                                Become a WinproFX Partner & Start Earning Today
                            </h2>
                            <p className='grow w-full max-w-106 text-para2 leading-normal text-sm! md:text-base'>
                                Embark on a lucrative journey by becoming a WinproFX Partner and kickstart your earnings today. Join our dynamic network, harness rewarding opportunities, and pave the way for financial success together.
                            </p>
                        </div>
                    </div>

                    <div className="service-boxs flex flex-wrap md:flex-nowrap gap-2 justify-center mt-8 lg:mt-0">
                        {items.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: y }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: duration, delay: `0.${index * 2}` }}
                                viewport={{ once: once, amount: 0.2 }}
                                className="single-item w-full p-4 lg:p-6 bg-white/4 rounded-3xl relative z-1" key={index}>
                                <img className="absolute top-0 left-0 w-full h-full -z-1" src={shap} alt="" />
                                <div className="w-12.5 mb-6 lg:mb-10 h-12.5 p-3 rounded-lg border border-[rgba(156,156,156,0.5)] bg-[linear-gradient(180deg,rgba(255,255,255,0.01)_0%,rgba(217,217,217,0.01)_100%)] shadow-[inset_0_4px_4px_0_rgba(0,217,255,0.25),-42px_103px_31px_0_rgba(0,217,255,0.00),-27px_66px_29px_0_rgba(0,217,255,0.01),-15px_37px_24px_0_rgba(0,217,255,0.03),-7px_17px_18px_0_rgba(0,217,255,0.04),-2px_4px_10px_0_rgba(0,217,255,0.05)] flex items-center justify-center">
                                    <img src={item.icon} alt="" className="w-full h-full object-contain" />
                                </div>
                                <p className='text-para text-base lg:text-xl leading-tight ' dangerouslySetInnerHTML={{ __html: item.desc }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}