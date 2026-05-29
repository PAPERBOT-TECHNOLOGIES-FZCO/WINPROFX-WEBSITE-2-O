import React from 'react'
import { motion } from 'framer-motion';
import { y, duration, once } from '@/utilities/animation'
import MetaText from '@/components/meta-text';
import { Container } from '@/components/grid'
import Button from '@/components/button'
import ButtonTwo from '@/components/buttonTwo'

export default function CommonBanner({
  className = "",
  containerClass = "max-w-230! mx-auto text-center",
  videoBg = "",
  bg = "",
  children,
  childrenClass = "mx-auto max-w-285",
  bgClass = "top-0 left-0 w-full h-full object-cover",
  meta = "",
  title = "",
  titleClass = "",
  des = "",
  desClass = "max-w-150 mx-auto lg:max-w-200",
  buttonText = "Open Account",
  buttonLink = "https://my.winprofx.org/register",
  secondButtonText = "",
  secondButtonLink = "" }) {
  return (
    <div
      className={`relative z-1 min-h-173 md:min-h-180 lg:min-h-190 xl:min-h-230 2xl:min-h-300 3xl:min-h-375 4xl:min-h-screen! overflow-hidden padding-top-245 bg-main-bg ${className}`}
    >
      <div className="hidden md:block absolute top-0 left-0 size-full bg-linear-180 to-black/60 from-black/0 -z-9 lg:hidden"></div>
      <Container
        className={`${containerClass}`}
      >
        <MetaText
          className="mb-4 md:mb-5 lg:mb-6 hidden! md:inline-block!"
          animation={true}
          delay="0.2"
          title={meta}
        />
        <motion.h1
          initial={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: duration, delay: `0.2` }}
          viewport={{ once: once, amount: 0.4 }}
          className={`h1 leading-[120%] capitalize mb-4 md:mb-5 lg:mb-7 ${titleClass}`}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: `0.4` }}
          viewport={{ once: once, amount: 0.6 }}
          className={`text-para2 ${desClass}`}
        >
          {des}
        </motion.p>
        <div className={`items-center justify-center gap-3 ${secondButtonText ? 'flex' : ''} mt-5 md:mt-6 lg:mt-8`}>
          <Button delay="0.5" text={buttonText} to={buttonLink} />
          {secondButtonText && (
            <ButtonTwo
              delay="0.6"
              text={secondButtonText}
              to={secondButtonLink}
            />
          )}
        </div>

      </Container>
      <div className={`${childrenClass}`}>
        {children}
      </div>

      {bg && (
        <img
          src={bg}
          className={` md:absolute -z-10 pointer-events-none mix-blend-lighten scale-160 md:scale-100 ${bgClass}`}
          alt=""
        />
      )}
      {videoBg && (
        <video
          src={videoBg}
          muted
          playsInline
          autoPlay
          loop
          controls={false}
          className={`md:absolute -z-10 pointer-events-none ${bgClass}`}
        ></video>
      )}
    </div>
  );
}
