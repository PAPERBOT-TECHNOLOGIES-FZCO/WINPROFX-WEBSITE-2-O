import React from "react";
import CommonTitle from "@/components/common-title";
import { Container } from "@/components/grid";
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'
import img1 from "@/assets/img/trade/eligibility1.png";
import img2 from "@/assets/img/trade/eligibility2.png";
import img3 from "@/assets/img/trade/eligibility3.png";
import img4 from "@/assets/img/trade/eligibility4.png";
import img5 from "@/assets/img/trade/eligibility5.png";
import img6 from "@/assets/img/trade/eligibility6.png";
import eligibilitybgshape from "@/assets/img/trade/eligibility-bg-shap.png";


export default function Eligibility() {
  const { t } = useTranslation('trading')
  const pu = (key) => t(`promotionUi.eligibility.${key}`)

  const itemKeys = ['whoCanJoin', 'singleEntry', 'withdrawals', 'tradeDuration', 'excludedInstruments', 'accountType']
  const images = [img1, img2, img3, img4, img5, img6]

  const eligibilityItems = itemKeys.map((key, index) => ({
    title: pu(`items.${key}.title`),
    desc: pu(`items.${key}.desc`),
    img: images[index],
  }));

  const widths = [
    "w-full md:w-[318px]",
    "w-full md:w-[404px]",
    "w-full md:w-[318px]",
    "w-full md:w-[404px]",
    "w-full md:w-[322px]",
    "w-full md:w-[318px]",
  ];
  return (
    <div className="common-padding">
      <Container>
        <div className="bg-white/3 backdrop-blur-2xl w-full max-w-6xl mx-auto py-6 lg:py-10 px-4 rounded-2xl lg:rounded-4xl border border-white/8 overflow-hidden relative">
            <img src={eligibilitybgshape} className="absolute top-0 left-0 w-full h-auto -z-1 pointer-events-none" alt="" />
          <CommonTitle
            className="max-w-120 text-center mx-auto mb-12"
            subTitle={pu('subTitle')}
            subTitleClass="rounded-full border border-white/20 bg-white/5 px-4 py-1 mb-4 inline-block uppercase text-xs"
            title={pu('title')}
            des={pu('des')}
          />

          {/* Cards */}
          <div className="flex flex-wrap gap-4 justify-center">
            {eligibilityItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: y }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: duration, delay: `0.${index}` }}
                viewport={{ once: once, amount: 0.2 }}
                className={`${widths[index]} rounded-2xl p-px bg-linear-0 to-white/20 from-white/0 overflow-hidden`}
              >
                <div className="rounded-2xl p-4 md:p-5 lg:p-6 bg-linear-0 to-[#121418] from-[#030509] h-full">
                  <img src={item.img} alt="" className="w-16 h-16 mb-4 object-contain" />
                  <h5 className="text-xl leading-tight font-bold text-white mb-2 md:mb-3">{item.title}</h5>
                  <p className="text-sm md:text-base leading-normal text-para">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
