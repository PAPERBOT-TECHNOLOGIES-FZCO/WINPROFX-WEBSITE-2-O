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

export default function StartTrading() {
  const items = [
    {
      icon: icon1,
      title: "Register",
      desc: "Create your live account",
    },
    {
      icon: icon2,
      title: "Fund",
      desc: "Make your first deposit",
    },
    {
      icon: icon3,
      title: "Trade",
      desc: "Hit your lot volume target",
    },
    {
      icon: icon4,
      title: "Claim Reward",
      desc: "Receive your exclusive prize",
    },
  ];
  return (
    <div className="common-padding">
      <Container>
        <CommonTitle
          className="max-w-160 mb-12 text-center mx-auto"
          subTitle="Get Started"
          subTitleClass="rounded-full border border-white/20 bg-white/5 px-4 py-1 mb-4 inline-block uppercase text-xs"
          title="Start Trading with WinproFX!"
          des="Every lot you trade brings you closer to an exclusive prize. Open your live account today and opt in to the Trade to Win program."
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
              <Button delay='0.5' to='https://my.winprofx.org/register' />             
              <ButtonTwo text="Login" to="https://my.winprofx.org/login" />
            </div>
            <p>Questions? Call us at <Link href="tel:+97144471894">+971 4 447 1894</Link> or visit <Link href="https://winprofx.org">winprofx.org</Link></p>
        </div>
      </Container>
    </div>
  );
}
