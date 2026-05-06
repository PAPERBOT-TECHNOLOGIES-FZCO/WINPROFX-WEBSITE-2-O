import React, { useState } from "react";
import Button from '@/components/button'
import Dropdown from "@/components/ui/dropdown";
import Input from "@/components/ui/input";

export default function OrderCalculator() {
  const [formData, setFormData] = useState({
    accountType: "",
    accountCurrency: "",
    instrument: "",
    lot: "",
    leverage: "",
  });

  const [results, setResults] = useState({
    margin: 485.53,
    spreadCost: 0,
    commission: 6.34,
    swapShot: 0,
    swapLong: -16.11,
    pipValue: 0.408811,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{
      background: 'linear-gradient(180deg, rgba(0, 125, 255, 0.00) 0%, rgba(0, 217, 255, 0.80) 250.56%), rgba(2, 4, 8, 0.09)'
    }} className="w-full mx-auto relative z-5 rounded-4xl border border-[#191A1D] border-solid backdrop-blur-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6">
        <div className="w-full">
          <div className="p-6 border-b-2 border-white/8">
            <h3 className="text-white text-2xl">Your Order</h3>
          </div>

          <div className="p-6 flex flex-col gap-8">
            <div className="flex flex-col gap-4 relative z-2">
              {/* Account Type */}
              <Dropdown
                btnClass="min-h-12"
                label="Account Type"
                placeholder="Select account type"
                items={[
                  { value: "standard", name: "Standard" },
                  { value: "pro", name: "Pro" },
                  { value: "ecn", name: "ECN" }
                ]}
              />

              {/* Account Currency */}
              <Dropdown
                btnClass="min-h-12"
                label="Account Currency"
                placeholder="Select account Currency"
                items={[
                  { value: "UAH", name: "UAH" },
                  { value: "USD", name: "USD" },
                  { value: "EUR", name: "EUR" }
                ]}
              />

              {/* Instrument */}
              <Dropdown
                btnClass="min-h-12"
                label="Select instrument"
                placeholder="Select account Currency"
                items={[
                  { value: "UAH", name: "EUR/USD" },
                  { value: "USD", name: "USD/JPY" },
                  { value: "EUR", name: "GBP/USD" }
                ]}
              />
              {/* Lot */}
              <Input
                label="Lot"
                placeholder="Enter your lot size"
                name="lot"
                value={formData.lot}
                onChange={handleInputChange}
                inputClass="min-h-12 bg-main-bg/24! border-white/24!"
              />

              {/* Leverage */}
              <Dropdown
                btnClass="min-h-12"
                label="Leverage"
                placeholder=" Select leverage"
                items={[
                  { value: "1:1", name: "1:1" },
                  { value: "1:10", name: "1:10" },
                  { value: "1:100", name: "1:100" },
                  { value: "1:500", name: "1:500" }
                ]}
              />
            </div>
            {/* Calculate Button */}
            <Button animation={false} text="Calculate Now" to="/" className="w-full" />
          </div>
        </div>

        {/* Right Side - Results */}
        <div className="pl-4 lg:pl-0 py-4 pr-4">
          <div className="rounded-[30px] bg-white/10 p-6 lg:p-8 backdrop-blur-[25px] h-full"
          >
            <h3 className="text-white text-2xl mb-6">Results</h3>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Margin */}
              <div className="p-4 bg-white/2 border-b border-white/10 rounded-xl">
                <p className="uppercase mb-2.5">Margin</p>
                <p className="text-white text-2xl font-bold font-satoshi">
                  {results.margin.toFixed(2)} UAH
                </p>
              </div>

              {/* Spread Cost */}
              <div className="p-4 bg-white/2 border-b border-white/10 rounded-xl">
                <p className="uppercase mb-2.5">Spread Cost</p>
                <p className="text-white text-2xl font-bold font-satoshi">
                  {results.spreadCost} UAH
                </p>
              </div>

              {/* Commission */}
              <div className="p-4 bg-white/2 border-b border-white/10 rounded-xl">
                <p className="uppercase mb-2.5">Commission</p>
                <p className="text-white text-2xl font-bold font-satoshi">
                  {results.commission.toFixed(2)} UAH
                </p>
              </div>

              {/* Swap Shot */}
              <div className="p-4 bg-white/2 border-b border-white/10 rounded-xl">
                <p className="uppercase mb-2.5">Swap Shot</p>
                <p className="text-white text-2xl font-bold font-satoshi">
                  {results.swapShot} UAH
                </p>
              </div>

              {/* Swap Long */}
              <div className="p-4 bg-white/2 border-b border-white/10 rounded-xl">
                <p className="uppercase mb-2.5">Swap Long</p>
                <p className="text-white text-2xl font-bold font-satoshi">
                  {results.swapLong.toFixed(2)} UAH
                </p>
              </div>

              {/* Pip Value */}
              <div className="p-4 bg-white/2 border-b border-white/10 rounded-xl">
                <p className="uppercase mb-2.5">Pip Value</p>
                <p className="text-white text-2xl font-bold font-satoshi">
                  {results.pipValue.toFixed(6)} UAH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
