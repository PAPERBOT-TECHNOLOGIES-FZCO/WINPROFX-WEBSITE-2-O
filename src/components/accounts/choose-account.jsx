import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/grid";
import CommonTitle from "@/components/common-title";
import Button from "@/components/button";
import { duration, once } from "@/utilities/animation";
import radialShape from "@/assets/img/accounts/radial-shape.svg";
import vectorShape from "@/assets/img/accounts/vector-shape.svg";

const accountsData = [
  {
    title: "Standard",
    badge: "RECOMMENDED",
    description: "Our most popular account. Great for all types of traders.",
    minimumDeposit: "$50",
    spread: "From 0.2 pips",
    commission: "No Commission",
    leverage: "1:500",
    instruments: ["Forex", "Metal", "Crypto", "Energies", "Indices"],
    featured: true,
  },
  {
    title: "Pro",
    badge: null,
    description:
      "Our instant execution account, with zero commission & low spread.",
    minimumDeposit: "$3000",
    spread: "From 0.1 pips",
    commission: "No Commission",
    leverage: "1:500",
    instruments: ["Forex", "Metal", "Crypto", "Energies", "Indices"],
    featured: false,
  },
  {
    title: "ECN",
    badge: null,
    description:
      "Our instant execution account, with zero commission & low spread",
    minimumDeposit: "$5000",
    spread: "From 0.0 pips",
    commission: "Up to $3.50 each side per lot",
    leverage: "1:500",
    instruments: ["Forex", "Metal", "Crypto", "Energies", "Indices"],
    featured: false,
  },
];

export default function ChooseAccount() {
  return (
    <>
      <CommonTitle
        title="Choose Your Account"
        className="mb-10 lg:mb-20 text-center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {accountsData.map((account, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: `${0.1 * index}` }}
            viewport={{ once: once, amount: 0.3 }}
            style={
              account.featured
                ? {
                  background: "linear-gradient(0deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), linear-gradient(112.15deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 217, 255, 0) 35.49%)",
                  border: "2px solid #00D9FF66",
                  backdropFilter: "blur(84px)",
                }
                : {}
            }
            className={`md:max-w-150 mx-auto lg:max-w-full relative rounded-3xl px-4 md:px-2 py-6 ${account.featured ? "" : "bg-[#0F1B23]/50 border border-[#1F3A45]"}`}
          >
            {account.featured && (
              <>
                <img
                  src={radialShape}
                  alt=""
                  className="absolute top-0 left-0 w-full object-contain pointer-events-none rounded-t-3xl"
                />
                <img
                  src={vectorShape}
                  alt=""
                  className="absolute -top-1/2 -right-1/2 w-full pointer-events-none blur-[100px]"
                />
              </>
            )}

            {account.badge && (
              <div className="absolute bg-[#142B31] backdrop-blur-2xl border border-white/20 -top-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-1 leading-none rounded-full z-10">
                {account.badge}
              </div>
            )}

            <div className="px-4">
              <h5 className="text-xl font-bold mb-2.5 text-white">
                {account.title}
              </h5>
              <p className="text-sm text-para2 2xl:w-9/12 mb-6">
                {account.description}
              </p>
            </div>

            <div
              className="space-y-5 p-6 mb-6 rounded-[20px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)",
                border: "1px solid",
                borderImageSource:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 11.57%)",
                backdropFilter: "blur(64px)",
                boxShadow: "0px 4px 4px 0px #FFFFFF1A inset",
              }}
            >
              {/* Minimum Deposit */}
              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-2.5">
                  Minimum Deposit
                </p>
                <p className="font-semibold text-white">
                  {account.minimumDeposit}
                </p>
              </div>

              {/* Spread */}
              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-2.5">
                  Spread
                </p>
                <p className="font-semibold text-white">{account.spread}</p>
              </div>

              {/* Commission */}
              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-2.5">
                  Commission
                </p>
                <p className="font-semibold text-white">{account.commission}</p>
              </div>

              {/* Leverage */}
              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-2.5">
                  Maximum Leverage
                </p>
                <p className="font-semibold text-white">{account.leverage}</p>
              </div>

              {/* Instruments */}
              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-3">
                  Instruments
                </p>
                <div className="flex flex-wrap gap-1.5 2xl:w-8/12">
                  {account.instruments.map((instrument, idx) => (
                    <span
                      key={idx}
                      className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-[64px] text-white"
                    >
                      {instrument}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-4">
              {account.featured ? (
                <Button
                  text="Register"
                  animation={false}
                  className="w-full justify-between"
                />
              ) : (
                <Button
                  text="Register"
                  animation={false}
                  variant="outline"
                  className="w-full justify-between text-white"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
