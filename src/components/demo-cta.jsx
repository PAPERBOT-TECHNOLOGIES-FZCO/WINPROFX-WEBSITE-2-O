import React from "react";
import bg from "@/assets/img/demo-cta.png";
import { motion } from "framer-motion";
import { duration, once } from "@/utilities/animation";
import Button from "./button";
import { useTranslation } from 'react-i18next'

export default function DemoCta() {
  const { t } = useTranslation('homepage')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: duration, delay: `0.4` }}
      viewport={{ once: once, amount: 0.2 }}
      className="relative z-1 rounded-2xl overflow-hidden border border-solid border-[#CBCBE1]/12 px-4 lg:px-8 xl:px-16 pt-8 lg:pt-10 xl:pt-16 pb-50 lg:pb-60 xl:pb-73.5"
      style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.04) 100%)" }}
    >
      <img
        src={bg}
        className="absolute top-1/6 bottom-0 left-0 size-full object-cover pointer-events-none -z-10"
        alt=""
      />
      <div className="max-w-167 flex flex-col">
        <h3 className="text-xl lg:text-2xl xl:text-[38px] mb-2.5 md:mb-3">{t('demoCta.title')}</h3>
        <p className="mb-4 md:mb-6">{t('demoCta.description')}</p>
        <Button text={t('demoCta.button')} />
      </div>
    </motion.div>
  );
}
