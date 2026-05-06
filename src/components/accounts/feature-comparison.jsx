import { image } from "framer-motion/client";
import React from "react";
import CommonTitle from "@/components/common-title";

export default function FeatureComparison() {
  const features = [
    {
      name: "Minimum Deposit",
      standard: "$50",
      pro: "$2500",
      ecn: "$5000",
    },
    {
      name: "Spread",
      standard: "From 0.2 pips",
      pro: "From 0.1 pips",
      ecn: "From 0 pips",
    },
    {
      name: "Commission",
      standard: "No Commission",
      pro: "No Commission",
      ecn: "Up to $3.50 each side per lot",
    },
    {
      name: "Maximum Leverage",
      standard: "1:500",
      pro: "1:500",
      ecn: "1:500",
    },
    {
      name: "Instruments",
      standard: (
        <div className="flex flex-wrap gap-1.5 justify-center">
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Forex
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Metal
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Crypto
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Energies
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Stocks
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Indices
          </span>
        </div>
      ),
      pro: (
        <div className="flex flex-wrap gap-1.5 justify-center">
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Forex
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Metal
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Crypto
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Energies
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Stocks
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Indices
          </span>
        </div>
      ),
      ecn: (
        <div className="flex flex-wrap gap-1.5 justify-center">
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Forex
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Metal
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Crypto
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Energies
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Stocks
          </span>
          <span className="flex items-center justify-center text-xs leading-none rounded-full px-3 py-1 bg-[#FFFFFF03] border border-[#FFFFFF1A] backdrop-blur-3xl text-white">
            Indices
          </span>
        </div>
      ),
    },
    {
      name: "Minimum lot size",
      standard: "0.01 pips",
      pro: "Font-medium 0.01 pips",
      ecn: "Font-medium 0.01 pips",
    },
    {
      name: "Maximum lot size",
      standard: "200 (7:00 - 20:59 GMT +0), 60 (21:00 - 6:59 GMT +0)",
      pro: "200 (7:00 - 20:59 GMT +0), 60 (21:00 - 6:59 GMT +0)",
      ecn: "200 (7:00 - 20:59 GMT +0), 60 (21:00 - 6:59 GMT +0)",
    },
    {
      name: "Maximum Number of positions",
      standard: "Unlimited",
      pro: "Unlimited",
      ecn: "Unlimited",
    },
    {
      name: "Hedged Margin",
      standard: "0%",
      pro: "0%",
      ecn: "0%",
    },
    {
      name: "Margin call",
      standard: "30%",
      pro: "30%",
      ecn: "30%",
    },
    {
      name: "Stop out",
      standard: "0% (See details about stocks)",
      pro: "0% (See details about stocks)",
      ecn: "0% (See details about stocks)",
    },
    {
      name: "Order execution",
      standard: "Market",
      pro: "Instant (Forex, metals, energies, stocks, indices), market (crypto)",
      ecn: "Market",
    },
    {
      name: "Swap-Free",
      standard: "Available",
      pro: "Available",
      ecn: "Available",
    },
  ];

  return (
    <div className="w-full">
      <CommonTitle
        title="Feature Comparison"
        className="mb-10 lg:mb-16 text-center"
      />

      <div className="w-full overflow-x-auto">
        <div className="min-w-300">
          <div className="grid grid-cols-4 gap-4">
            {/* Feature Column */}
            <div className="-mr-4 border-2 border-transparent">
              <div className="p-4 h-20 border-b border-white/10"></div>
              {features.map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className={`px-6 py-4.5 border-b last:border-0 border-white/10 text-white flex items-center  ${feature.name === "Instruments" ? "min-h-22" : feature.name === "Maximum lot size" ? "min-h-21" : feature.name === "Order execution" ? "min-h-21" : "min-h-14"}`}
                >
                  {feature.name}
                </div>
              ))}
            </div>
            {/* Standard Column */}
            <div
              style={{
                backgroundImage:
                  "radial-gradient(317.48% 94.23% at 30.03% 75%, rgba(2, 2, 26, 0) 45%, #276CEC 80%, #FFFFFF 94.84%)",
                boxShadow:
                  "inset 0 0 0 2px rgba(255, 255, 255, 0.1), inset 0 -30px 0 -28px rgba(255, 255, 255, 0.05)",
              }}
              className="rounded-[30px]"
            >
              <div className="p-4 h-20 flex items-center justify-center border-b border-white/10 rounded-t-[30px]">
                <p className=" text-white font-bold font-satoshi">STANDARD</p>
              </div>
              {features.map((feature, index, arr) => (
                <div
                  key={`standard-${index}`}
                  className={`px-6 py-4.5 border-b last:border-0 border-white/10 text-white flex items-center justify-center text-center ${index === arr.length - 1 ? "rounded-b-[30px]" : ""} ${feature.name === "Instruments" ? "min-h-22" : feature.name === "Maximum lot size" ? "min-h-21" : feature.name === "Order execution" ? "min-h-21" : "min-h-14"}`}
                >
                  {feature.standard}
                </div>
              ))}
            </div>
            {/* Pro Column */}
            <div
              style={{
                backgroundImage:
                  "radial-gradient(317.48% 94.23% at 30.03% 75%, rgba(2, 2, 26, 0) 45%, #00D9FF 80%, #FFFFFF 94.84%)",
                boxShadow:
                  "inset 0 0 0 2px rgba(255, 255, 255, 0.1), inset 0 -30px 0 -28px rgba(255, 255, 255, 0.05)",
              }}
              className="rounded-[30px]"
            >
              <div className="p-4 h-20 flex items-center justify-center border-b border-white/10 rounded-t-[30px]">
                <p className=" text-white font-bold font-satoshi">PRO</p>
              </div>
              {features.map((feature, index, arr) => (
                <div
                  key={`pro-${index}`}
                  className={`px-6 py-4.5 border-b last:border-0 border-white/10 text-white flex items-center justify-center text-center ${index === arr.length - 1 ? "rounded-b-[30px]" : ""} ${feature.name === "Instruments" ? "min-h-22" : feature.name === "Maximum lot size" ? "min-h-21" : feature.name === "Order execution" ? "min-h-21" : "min-h-14"}`}
                >
                  {feature.pro}
                </div>
              ))}
            </div>
            {/* ECN Column */}
            <div
              style={{
                backgroundImage:
                  "radial-gradient(317.48% 94.23% at 30.03% 75%, rgba(2, 2, 26, 0) 45%, #9D20CA 80%, #FFFFFF 94.84%)",
                boxShadow:
                  "inset 0 0 0 2px rgba(255, 255, 255, 0.1), inset 0 -30px 0 -28px rgba(255, 255, 255, 0.05)",
              }}
              className="rounded-[30px]"
            >
              <div className="p-4 h-20 flex items-center justify-center border-b border-white/10 rounded-t-[30px]">
                <p className=" text-white font-bold font-satoshi">ECN</p>
              </div>
              {features.map((feature, index, arr) => (
                <div
                  key={`ecn-${index}`}
                  className={`px-6 py-4.5 border-b last:border-0 border-white/10 text-white flex items-center justify-center text-center ${index === arr.length - 1 ? "rounded-b-[30px]" : ""} ${feature.name === "Instruments" ? "min-h-22" : feature.name === "Maximum lot size" ? "min-h-21" : feature.name === "Order execution" ? "min-h-21" : "min-h-14"}`}
                >
                  {feature.ecn}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
