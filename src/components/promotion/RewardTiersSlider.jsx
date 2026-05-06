import React from "react";
import { Container } from "@/components/grid";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import rewardImg1 from '@/assets/img/trade/reward-img1.png'
import rewardImg2 from '@/assets/img/trade/reward-img2.png'
import rewardImg3 from '@/assets/img/trade/reward-img3.png'
import rewardImg4 from '@/assets/img/trade/reward-img4.png'
import { AnimatePresence, motion } from "framer-motion";

const rewardTiers = [
  {
    volume: "1,000",
    prize: "MacBook",
    desc: "Trade smarter on a bigger screen",
    image: rewardImg1,
    featured: true,
  },
  {
    volume: "500",
    prize: "Latest iPhone",
    desc: "The ultimate prize for top traders",
    image: rewardImg2,
    featured: false,
  },
  {
    volume: "300",
    prize: "iPad Pro",
    desc: "Pro-level performance in your hands",
    image: rewardImg3,
    featured: false,
  },
  {
    volume: "50",
    prize: "Power Bank",
    desc: "Stay powered wherever you trade",
    image: rewardImg4,
    featured: false,
  },
  {
    volume: "1,000",
    prize: "MacBook",
    desc: "Trade smarter on a bigger screen",
    image: rewardImg1,
    featured: true,
  },
  {
    volume: "500",
    prize: "Latest iPhone",
    desc: "The ultimate prize for top traders",
    image: rewardImg2,
    featured: false,
  },
  {
    volume: "300",
    prize: "iPad Pro",
    desc: "Pro-level performance in your hands",
    image: rewardImg3,
    featured: false,
  },
  {
    volume: "50",
    prize: "Power Bank",
    desc: "Stay powered wherever you trade",
    image: rewardImg4,
    featured: false,
  },
];

export default function RewardTiersSlider() {
  return (
    <div className="reward_tiers_slider relative">
      <div className="overflow-hidden">
        <Container className="pr-0 overflow-visible">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            pagination={false}
            breakpoints={{
              480: { slidesPerView: 1.3 },
              640: { slidesPerView: 1.5 },
              900: { slidesPerView: 2.5 },
              1100: { slidesPerView: 3.2 },
            }}
            style={{ overflow: "visible" }}
          >
            {rewardTiers.map((tier, index) => (
              <SwiperSlide key={index} className="h-auto">
                {({ isActive }) => (
                  <div className="relative overflow-hidden z-1">
                    <div
                      className={`relative z-1 reward-card rounded-3xl overflow-hidden h-full transition-all duration-300 p-6 ${isActive
                        ? "border border-solid border-white/20 bg-[255,255,255,0.03] "
                        : "border border-solid border-white/12 bg-white/4 backdrop-blur-2xl"
                        } hover:border-primary/40`}
                    >
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0 }}
                            className="absolute top-0 right-0 -z-1 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="174" height="321" viewBox="0 0 174 321" fill="none">
                              <g filter="url(#filter0_f_1_47898)">
                                <path d="M104.599 35.6161C148.145 -55.6689 255.343 -95.375 344.03 -53.0679C432.717 -10.7608 469.311 97.5371 425.764 188.823C382.217 280.109 337.47 180.28 248.783 137.974C160.096 95.6676 61.0526 126.902 104.599 35.6161Z" fill="url(#paint0_radial_1_47898)" />
                              </g>
                              <defs>
                                <filter id="filter0_f_1_47898" x="0" y="-164" width="538.117" height="484.099" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                  <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_1_47898" />
                                </filter>
                                <radialGradient id="paint0_radial_1_47898" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(292.891 54.1352) rotate(121.07) scale(194.943 292.012)">
                                  <stop stop-color="#00D9FF" />
                                  <stop offset="1" stop-color="#00D9FF" stop-opacity="0" />
                                </radialGradient>
                              </defs>
                            </svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {/* Card Header */}

                      <div className="">
                        <p className="text-sm lg:text-base tracking-[2px] uppercase text-[#ABACB3] leading-normal font-medium mb-1.5">
                          Trading Volume
                        </p>
                        <div className="text-2xl lg:text-5xl font-bold text-primary leading-tight">
                          {tier.volume}{" "}
                          <span className="text-sm lg:text-base font-normal uppercase leading-tight text-[#ABACB3] align-middle">
                            LOTS
                          </span>
                        </div>
                      </div>

                      {/* Card Image */}
                      <div className="w-full h-45 rounded-2xl  mt-4 overflow-hidden bg-[#222428]">
                        <img
                          src={tier.image}
                          alt={tier.prize}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Card Body */}
                      <div className="pt-5.5">
                        <h3 className="text-white text-xl  font-bold mb-1.5">
                          {tier.prize}
                        </h3>
                        <p className="text-[#ABACB3] text-sm lg:text-base leading-normal">
                          {tier.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
      <Container>
        <p className="text-xs lg:text-sm text-[#ABACB3]  mt-8 px-1 leading-normal">
          <strong className="text-para2 font-normal leading-normal">Note:</strong> Achieve
          your target volume within 30 days from opt-in date. Stocks & crypto
          pairs excluded.
        </p>
      </Container>
    </div>
  );
}
