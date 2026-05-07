import React from "react";
import { Link } from "react-router-dom";
import bg from "@/assets/img/noise.png";
import { y, duration, once } from "@/utilities/animation";
import { motion } from "framer-motion";

export default function Button({
  to = "https://my.winprofx.org/register",
  text = "Open Account",
  className = "",
  animation = true,
  delay = "0.2",
  gradientStart = "#00D9FF",
  gradientEnd = "#00C8EB",
  variant = "default",
}) {
  const isTransparent = variant === "outline";
  const backgroundStyle = isTransparent
    ? { backgroundImage: "none" }
    : {
        backgroundImage: `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%), ${gradientStart}`,
      };

  const isExternal = to.startsWith("http");
  const linkProps = isExternal
    ? { href: to, target: "_blank", rel: "noopener noreferrer" }
    : { to };
  const Tag = isExternal ? "a" : Link;

  return (
    <motion.div
      initial={animation ? { opacity: 0, y: y } : ""}
      whileInView={animation ? { opacity: 1, y: 0 } : ""}
      transition={{ duration: duration, delay: delay }}
      viewport={{ once: once, amount: 0.2 }}
    >
      <Tag
        style={backgroundStyle}
        {...linkProps}
        className={`group hover:-translate-y-1 inline-flex gap-x-5 text-base relative z-1 ${isTransparent ? "bg-transparent border border-white/12 hover:border-white/20" : "bg-primary bg-linear-180 to-primary from-secondary shadow-[0_1px_18px_2px_#D5F9FF_inset,0_1px_4px_2px_#00D9FF_inset,0_10.268px_13.398px_0_rgba(0,217,255,0.22),0_3.714px_4.846px_0_rgba(0,217,255,0.15)]"} items-center justify-between p-1 text-black rounded-full min-h-10.5 min-w-4 overflow-hidden ${className}`}
      >
        {!isTransparent && (
          <img
            src={bg}
            className="absolute top-0 left-0 size-full object-cover -z-10 pointer-events-none"
            alt=""
          />
        )}

        <span className="inline-block pl-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300 ease-in-out">
          {text}
        </span>
        <span className="relative flex items-center size-8.5 justify-center rounded-full bg-[#E9E9E9] text-[#0D0F12] shadow-[0_-1px_1px_0_#FFF_inset,0_4px_4px_0_rgba(0,217,255,0.25)_inset,0_1px_1px_0_rgba(0,217,255,0.60)_inset] overflow-hidden">
          <svg
            className="absolute transition-transform duration-300 ease-in-out group-hover:translate-x-8"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 6.26897L10.75 6.26897M10.75 6.26897L5.50524 0.75M10.75 6.26897L5.50524 11.75"
              stroke="#0D0F12"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="absolute -translate-x-8 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 6.26897L10.75 6.26897M10.75 6.26897L5.50524 0.75M10.75 6.26897L5.50524 11.75"
              stroke="#0D0F12"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Tag>
    </motion.div>
  );
}
