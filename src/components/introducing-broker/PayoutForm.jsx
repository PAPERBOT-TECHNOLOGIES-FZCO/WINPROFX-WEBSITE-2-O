import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/grid";
import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import CommonTitle from "@/components/common-title";

export default function PayoutForm() {
  const { t } = useTranslation("trading");
  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSendOtp = () => {
    setOtpLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setOtpLoading(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const otpButtonLabel = otpLoading
    ? t("introducingBroker.payoutForm.sendingOtp")
    : otpSent
      ? t("introducingBroker.payoutForm.otpSent")
      : t("introducingBroker.payoutForm.sendOtp");

  return (
    <section className="common-padding pt-0 flex items-center justify-center ">
      <Container>
        <CommonTitle
          className="text-center mx-auto max-w-143"
          title={t("introducingBroker.payoutForm.title")}
        />
        <div className="rounded-lg lg:rounded-[20px] max-w-185 mx-auto backdrop-blur-xl p-4 md:p-6 lg:p-8 bg-white/4 border border-solid border-white/10 overflow-hidden">
          <div className="mb-5 lg:mb-10">
            <h2 className="text-white text-xl font-bold leading-tight mb-3 lg:mb-4">
              {t("introducingBroker.payoutForm.heading")}
            </h2>
            <p className="text-para text-sm">
              {t("introducingBroker.payoutForm.description")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="payoutform flex flex-col gap-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input
                label={t("introducingBroker.payoutForm.fullName")}
                placeholder={t("introducingBroker.payoutForm.fullNamePlaceholder")}
                name="fullName"
                required
              />
              <Input
                label={t("introducingBroker.payoutForm.email")}
                type="email"
                placeholder={t("introducingBroker.payoutForm.emailPlaceholder")}
                name="email"
                required
              />
            </div>
            <Input
              label={t("introducingBroker.payoutForm.phone")}
              name="number"
              type="tel"
              placeholder={t("introducingBroker.payoutForm.phonePlaceholder")}
              children={
                <>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={otpLoading || otpSent}
                    className={`absolute top-1/2 -translate-y-1/2 right-3 px-4 py-2 rounded-full text-xs leading-none font-normal tracking-widest transition-all ${otpSent ? "bg-green-500/15 border border-green-500/30 text-green-400 cursor-default" : otpLoading ? "bg-white/6 border border-white/20 text-white cursor-not-allowed" : "bg-white/6 border border-white/20 text-white hover:text-black hover:bg-primary cursor-pointer"}`}
                  >
                    {otpButtonLabel}
                  </button>
                </>
              }
            />
            <Input
              label={t("introducingBroker.payoutForm.message")}
              type="textarea"
              placeholder={t("introducingBroker.payoutForm.messagePlaceholder")}
              name="message"
              inputClass="min-h-32 rounded-xl! p-4!"
              labelClass="uppercase text-white"
            />

            <Checkbox
              id="agree"
              name="agree"
              title={t("introducingBroker.payoutForm.agree")}
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              labelClass="word-break! max-w-75"
            />
            <button
              type="submit"
              disabled={!agreed}
              className="w-full bg-primary rounded-full text-black font-medium text-base min-h-11 transition-all
               hover:bg-white/10 hover:text-white hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-white/6"
            >
              {t("introducingBroker.payoutForm.submit")}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
