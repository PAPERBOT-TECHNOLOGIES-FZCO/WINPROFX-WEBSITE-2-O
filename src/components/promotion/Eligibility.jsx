import React from "react";
import CommonTitle from "@/components/common-title";
import { Container } from "@/components/grid";
import { y, duration, once } from '@/utilities/animation'
import { motion } from 'framer-motion';
import img1 from "@/assets/img/trade/eligibility1.png";
import img2 from "@/assets/img/trade/eligibility2.png";
import img3 from "@/assets/img/trade/eligibility3.png";
import img4 from "@/assets/img/trade/eligibility4.png";
import img5 from "@/assets/img/trade/eligibility5.png";
import img6 from "@/assets/img/trade/eligibility6.png";
import eligibilitybgshape from "@/assets/img/trade/eligibility-bg-shap.png";
import { div } from "framer-motion/client";


export default function Eligibility() {
    const eligibilityItems = [
  {
    title: "Who Can Join",
    desc: "Exclusively for retail clients. Introducing Brokers (IBs) are excluded and cannot participate in this campaign.",
    img: img1,
  },
  {
    title: "Single Entry",
    desc: "Each participant can only join one program activity at a time. Choose your tier wisely before opting in.",
    img: img2,
  },
  {
    title: "Withdrawals Allowed",
    desc: "Withdrawals are permitted throughout the campaign and will not disqualify you from the program.",
    img: img3,
  },
  {
    title: "Trade Duration",
    desc: "Eligible trades must be held open for at least 3min to count as a qualifying lot toward your target.",
    img: img4,
  },
  {
    title: "Excluded Instruments",
    desc: "Stocks and cryptocurrency pairs are not eligible for this promotion. All other supported instruments qualify.",
    img: img5,
  },
  {
    title: "Account Type",
    desc: "Only self-directed individual accounts can participate. Managed accounts or accounts referred by IBs are not eligible.",
    img: img6,
  },
];
  const widths = [
    "w-full md:w-[318px]", // 1
    "w-full md:w-[404px]", // 2
    "w-full md:w-[318px]", // 3
    "w-full md:w-[404px]", // 4
    "w-full md:w-[322px]", // 5
    "w-full md:w-[318px]", // 6
  ];
  return (
    <div className="common-padding">
      <Container>
        <div className="bg-white/3 backdrop-blur-2xl w-full max-w-6xl mx-auto py-6 lg:py-10 px-4 rounded-2xl lg:rounded-4xl border border-white/8 overflow-hidden relative">
            <img src={eligibilitybgshape} className="absolute top-0 left-0 w-full h-auto -z-1 pointer-events-none" alt="" />
          <CommonTitle
            className="max-w-120 text-center mx-auto mb-12"
            subTitle="Eligibility"
            subTitleClass="rounded-full border border-white/20 bg-white/5 px-4 py-1 mb-4 inline-block uppercase text-xs"
            title="Who Can Participate?"
            des="Getting started is simple. Complete these steps and you're on your way to winning exclusive Apple rewards."
          />

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto relative z-1">
            {eligibilityItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: y }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: duration, delay: index * 0.2 }}
                viewport={{ once: once, amount: 0.2 }}
                key={index}
              >
              <div className={`w-79.5 bg-white/4 border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${widths[index]} p-4 pb-6`}
              >
                {/* img */}
                <div className={`${index === 1 || index === 3 ? "h-60" : "h-55"} rounded-2xl flex items-center justify-center bg-[#1A1C20] border-b border-white/10 overflow-hidden`}>
                  <img
                    src={item.img}
                    className={`w-full h-full ${index === 4 || index === 5 ? "object-cover" : "object-contain"}`}
                    alt=""
                  />
                </div>

                {/* Content */}
                <div className="md:p-4 pt-6 pb-0 flex flex-col gap-2 grow space-y-1">
                  <p className="text-white font-bold leading-tight text-lg">
                    {item.title}
                  </p>
                  <p className="text-para text-sm leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
