import React from "react";
import CommonTitle from "@/components/common-title";
import { Container } from "@/components/grid";
import icon1 from "@/assets/img/promotion/icon1.png";
import icon2 from "@/assets/img/promotion/icon2.png";
import icon3 from "@/assets/img/promotion/icon3.png";
import icon4 from "@/assets/img/promotion/icon4.png";
import shap from "@/assets/img/promotion/shap.png";
import Button from '@/components/button'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { y, duration, once } from '@/utilities/animation'
import ButtonTwo from "@/components/buttonTwo";
import { useTranslation } from 'react-i18next'
import { getPortalLoginUrl } from "@/lib/domain-locale";

export default function StartTrading() {
  const { t } = useTranslation('trading')
  const { t: tNav } = useTranslation('navigation')
  const pu = (key) => t(`promotionUi.startTrading.${key}`)

  const stepKeys = ['register', 'fund', 'trade', 'claim']
  const icons = [icon1, icon2, icon3, icon4]
  const items = stepKeys.map((key, index) => ({
    icon: icons[index],
    title: pu(`steps.${key}.title`),
    desc: pu(`steps.${key}.desc`),
  }));

  return (
    <div className="common-padding">
      <Container>
        <CommonTitle
          className="max-w-160 mb-12 text-center mx-auto"
          subTitle={pu('subTitle')}
          subTitleClass="rounded-full border border-white/20 bg-white/5 px-4 py-1 mb-4 inline-block uppercase text-xs"
          title={pu('title')}
          des={pu('des')}
          desClass="max-w-150"
        />

        <div className="service-boxs flex flex-wrap lg:flex-nowrap gap-2 justify-center">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: y }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: duration, delay: `0.${index * 2}` }}
              viewport={{ once: once, amount: 0.2 }}
            className="single-item w-full max-w-70 min-w-50  p-4 lg:p-6 bg-white/4 rounded-3xl relative z-1" key={index}>
                <img className="absolute top-0 left-0 w-full h-full -z-1" src={shap} alt="" />
              <img className="mb-4" src={item.icon} alt={item.title} />
              <h4 className="text-base font-bold leading-normal mb-3">{item.title}</h4>
              <p className="text-para text-sm leading-normal">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
            <div className="mb-4 lg:mb-6 mt-4 lg:mt-8 flex items-center justify-center gap-4">
              <Button delay='0.5' />
              <ButtonTwo text={tNav('login')} to={getPortalLoginUrl()} />
            </div>
            <p>{pu('questionsPrefix')} <Link href="tel:+97144471894">+971 4 447 1894</Link> {pu('questionsSuffix')} <Link href="https://winprofx.com">winprofx.com</Link></p>
        </div>
      </Container>
    </div>
  );
}
