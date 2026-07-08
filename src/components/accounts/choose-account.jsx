import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CommonTitle from "@/components/common-title";
import Button from "@/components/button";
import { duration, once } from "@/utilities/animation";
import radialShape from "@/assets/img/accounts/radial-shape.svg";
import vectorShape from "@/assets/img/accounts/vector-shape.svg";

const PLAN_KEYS = ["standard", "pro", "ecn"];

export default function ChooseAccount() {
  const { t } = useTranslation("trading");

  const instrumentKeys = ["forex", "metal", "crypto", "energies", "indices"];

  const accountsData = useMemo(
    () =>
      PLAN_KEYS.map((key, index) => ({
        title: t(`accounts.chooseAccount.plans.${key}.title`),
        badge: key === "standard" ? t("accounts.chooseAccount.recommended") : null,
        description: t(`accounts.chooseAccount.plans.${key}.description`),
        minimumDeposit: t(`accounts.chooseAccount.plans.${key}.minimumDeposit`),
        spread: t(`accounts.chooseAccount.plans.${key}.spread`),
        commission: t(`accounts.chooseAccount.plans.${key}.commission`),
        leverage: t(`accounts.chooseAccount.plans.${key}.leverage`),
        instruments: instrumentKeys.map((instrument) =>
          t(`accounts.chooseAccount.instruments.${instrument}`)
        ),
        featured: key === "standard",
        index,
      })),
    [t]
  );

  return (
    <>
      <CommonTitle
        title={t("accounts.chooseAccount.title")}
        className="mb-10 lg:mb-20 text-center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {accountsData.map((account) => (
          <motion.div
            key={account.index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, delay: `${0.1 * account.index}` }}
            viewport={{ once: once, amount: 0.3 }}
            style={
              account.featured
                ? {
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), linear-gradient(112.15deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 217, 255, 0) 35.49%)",
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
              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-2.5">
                  {t("accounts.chooseAccount.labels.minimumDeposit")}
                </p>
                <p className="font-semibold text-white">
                  {account.minimumDeposit}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-2.5">
                  {t("accounts.chooseAccount.labels.spread")}
                </p>
                <p className="font-semibold text-white">{account.spread}</p>
              </div>

              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-2.5">
                  {t("accounts.chooseAccount.labels.commission")}
                </p>
                <p className="font-semibold text-white">{account.commission}</p>
              </div>

              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-2.5">
                  {t("accounts.chooseAccount.labels.maxLeverage")}
                </p>
                <p className="font-semibold text-white">{account.leverage}</p>
              </div>

              <div>
                <p className="text-sm text-[#8FB4CC] leading-none mb-3">
                  {t("accounts.chooseAccount.labels.instruments")}
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
                  text={t("accounts.chooseAccount.register")}
                  animation={false}
                  className="w-full justify-between"
                />
              ) : (
                <Button
                  text={t("accounts.chooseAccount.register")}
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
