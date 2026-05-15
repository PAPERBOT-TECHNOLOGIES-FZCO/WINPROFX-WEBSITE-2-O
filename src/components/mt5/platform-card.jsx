import React from "react";
import { motion } from "framer-motion";
import PlayStoreBtn from "@/components/play-store-btn";
import { y, duration, once } from "@/utilities/animation";

import MetaText from "../meta-text";
import AppStoreBtn from "../app-store-btn";

export default function PlatformCard({ meta = "", title = "", des = "", img }) {
  return (
    <div
      className="relative z-1 flex flex-wrap flex-col-reverse lg:flex-row even:lg:flex-row-reverse lg:items-center justify-between gap-y-6 xl:gap-x-0 rounded-2xl overflow-hidden border border-solid border-white/8 p-4 backdrop-blur-2xl"
      style={{
        backgroundImage:
          "linear-gradient(112deg, rgba(0, 217, 255, 0.10) 0%, rgba(0, 217, 255, 0.00) 35.49%)",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
      }}
    >
      <svg
        className="max-w-full absolute top-0 right-0 -z-10 pointer-events-none"
        width="575"
        height="430"
        viewBox="0 0 575 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_6100_280)">
          <g filter="url(#filter1_f_6100_280)">
            <path
              d="M234.21 15.6161C277.756 -75.6689 384.953 -115.375 473.64 -73.0679C562.327 -30.7608 598.921 77.5371 555.375 168.823C511.828 260.109 467.08 160.28 378.393 117.974C289.706 75.6676 190.663 106.902 234.21 15.6161Z"
              fill="url(#paint0_radial_6100_280)"
            />
          </g>
        </g>
        <g filter="url(#filter2_f_6100_280)">
          <path
            d="M619.148 -26.6688C669.889 -7.70831 707.07 21.3023 702.193 38.1282C697.316 54.9541 652.228 53.2236 601.486 34.2631C550.745 15.3026 513.564 -13.7081 518.441 -30.534C523.318 -47.3599 568.406 -45.6294 619.148 -26.6688Z"
            fill="#00D9FF"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_6100_280"
            x="0.000350952"
            y="-313.61"
            width="797.338"
            height="743.319"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="111.805"
              result="effect1_foregroundBlur_6100_280"
            />
          </filter>
          <filter
            id="filter1_f_6100_280"
            x="129.61"
            y="-184"
            width="538.118"
            height="484.099"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="47"
              result="effect1_foregroundBlur_6100_280"
            />
          </filter>
          <filter
            id="filter2_f_6100_280"
            x="418.012"
            y="-142.103"
            width="384.611"
            height="291.801"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_6100_280"
            />
          </filter>
          <radialGradient
            id="paint0_radial_6100_280"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(422.502 34.1352) rotate(121.07) scale(194.943 292.012)"
          >
            <stop stop-color="#00D9FF" />
            <stop offset="1" stop-color="#00D9FF" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <motion.div
        initial={{ opacity: 0, y: y }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: duration, delay: 0.4 }}
        viewport={{ once: once, amount: 0.2 }}
        className="max-w-full lg:max-w-140 xl:max-w-140 w-full lg:p-4 xl:p-6"
      >
        <MetaText className="mb-4 hidden! md:inline-block!" title={meta} />
        <h3 className="h2 mb-3 md:mb-4 lg:max-w-84">{title}</h3>
        <div className="flex flex-col gap-y-5 mb-4 md:mb-6">{des}</div>
        <div className="flex items-center gap-2">
          <PlayStoreBtn animation={false} to="https://download.terminal.free/cdn/web/metaquotes.software.corp/mt5/metatrader5.apk?utm_source=www.metatrader5.com&utm_campaign=install.metaquotes" />
          <AppStoreBtn animation={false} to="https://download.terminal.free/cdn/mobile/mt5/ios?server=Winprofx-Live" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: y }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: duration, delay: 0.4 }}
        viewport={{ once: once, amount: 0.2 }}
        className="max-w-full lg:max-w-85 xl:max-w-127 h-60 md:h-75 lg:h-86 xl:h-112 w-full rounded-2xl overflow-hidden bg-white/6 flex"
      >
        <img src={img} alt="" />
      </motion.div>
    </div>
  );
}
