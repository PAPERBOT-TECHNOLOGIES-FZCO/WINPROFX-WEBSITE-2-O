import React from "react";
import CommonTitle from "@/components/common-title";
import { Container } from "@/components/grid";
import img from "@/assets/img/promotion/img.png";
import { y, duration, once } from "@/utilities/animation";
import { motion } from "framer-motion";
export default function PtConditions() {
  const steps = [
    {
      id: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <g clip-path="url(#clip0_1_47962)">
            <path
              d="M12.8147 12.5243C14.5353 12.5243 16.0253 11.9072 17.2426 10.6896C18.46 9.47225 19.0771 7.98274 19.0771 6.26194C19.0771 4.54173 18.46 3.05202 17.2424 1.83427C16.0249 0.617109 14.5351 0 12.8147 0C11.0939 0 9.6044 0.617109 8.38704 1.83447C7.16968 3.05182 6.55237 4.54153 6.55237 6.26194C6.55237 7.98274 7.16968 9.47245 8.38724 10.6898C9.6048 11.907 11.0945 12.5243 12.8147 12.5243Z"
              fill="url(#paint0_linear_1_47962)"
            />
            <path
              d="M23.7722 19.9927C23.7371 19.486 23.666 18.9334 23.5615 18.3498C23.456 17.7619 23.3201 17.206 23.1574 16.698C22.9894 16.173 22.7609 15.6544 22.4784 15.1575C22.1853 14.6418 21.8409 14.1927 21.4545 13.8232C21.0504 13.4365 20.5557 13.1257 19.9836 12.899C19.4135 12.6734 18.7817 12.5592 18.1059 12.5592C17.8405 12.5592 17.5838 12.6681 17.0881 12.9908C16.783 13.1898 16.4261 13.4199 16.0278 13.6744C15.6872 13.8914 15.2258 14.0947 14.6559 14.2788C14.0999 14.4587 13.5354 14.55 12.9782 14.55C12.421 14.55 11.8566 14.4587 11.3 14.2788C10.7307 14.0949 10.2693 13.8916 9.92912 13.6746C9.53458 13.4225 9.17752 13.1924 8.86787 12.9906C8.37276 12.6679 8.11588 12.559 7.85046 12.559C7.17444 12.559 6.54285 12.6734 5.97295 12.8992C5.40126 13.1255 4.90634 13.4363 4.50188 13.8234C4.11566 14.1931 3.7711 14.642 3.47832 15.1575C3.19604 15.6544 2.96753 16.1728 2.79932 16.6982C2.63686 17.2062 2.50098 17.7619 2.39545 18.3498C2.29091 18.9326 2.21989 19.4854 2.18478 19.9933C2.15027 20.4907 2.13281 21.0071 2.13281 21.5286C2.13281 22.8858 2.56425 23.9845 3.41504 24.7948C4.25531 25.5944 5.36714 26.0001 6.71919 26.0001H19.2384C20.5904 26.0001 21.7018 25.5946 22.5423 24.7948C23.3933 23.9851 23.8247 22.8862 23.8247 21.5284C23.8245 21.0045 23.8069 20.4878 23.7722 19.9927Z"
              fill="url(#paint1_linear_1_47962)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_47962"
              x1="12.9788"
              y1="0"
              x2="12.9788"
              y2="26.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D9FF" />
              <stop offset="1" stopColor="#007DFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_47962"
              x1="12.9788"
              y1="0"
              x2="12.9788"
              y2="26.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D9FF" />
              <stop offset="1" stopColor="#007DFF" />
            </linearGradient>
            <clipPath id="clip0_1_47962">
              <rect width="26" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Fair Play",
      desc: "Any signs of market abuse such as latency arbitrage or manipulative trading techniques will result in immediate disqualification from the program.",
    },
    {
      id: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <g clip-path="url(#clip0_1_47962)">
            <path
              d="M12.8147 12.5243C14.5353 12.5243 16.0253 11.9072 17.2426 10.6896C18.46 9.47225 19.0771 7.98274 19.0771 6.26194C19.0771 4.54173 18.46 3.05202 17.2424 1.83427C16.0249 0.617109 14.5351 0 12.8147 0C11.0939 0 9.6044 0.617109 8.38704 1.83447C7.16968 3.05182 6.55237 4.54153 6.55237 6.26194C6.55237 7.98274 7.16968 9.47245 8.38724 10.6898C9.6048 11.907 11.0945 12.5243 12.8147 12.5243Z"
              fill="url(#paint0_linear_1_47962)"
            />
            <path
              d="M23.7722 19.9927C23.7371 19.486 23.666 18.9334 23.5615 18.3498C23.456 17.7619 23.3201 17.206 23.1574 16.698C22.9894 16.173 22.7609 15.6544 22.4784 15.1575C22.1853 14.6418 21.8409 14.1927 21.4545 13.8232C21.0504 13.4365 20.5557 13.1257 19.9836 12.899C19.4135 12.6734 18.7817 12.5592 18.1059 12.5592C17.8405 12.5592 17.5838 12.6681 17.0881 12.9908C16.783 13.1898 16.4261 13.4199 16.0278 13.6744C15.6872 13.8914 15.2258 14.0947 14.6559 14.2788C14.0999 14.4587 13.5354 14.55 12.9782 14.55C12.421 14.55 11.8566 14.4587 11.3 14.2788C10.7307 14.0949 10.2693 13.8916 9.92912 13.6746C9.53458 13.4225 9.17752 13.1924 8.86787 12.9906C8.37276 12.6679 8.11588 12.559 7.85046 12.559C7.17444 12.559 6.54285 12.6734 5.97295 12.8992C5.40126 13.1255 4.90634 13.4363 4.50188 13.8234C4.11566 14.1931 3.7711 14.642 3.47832 15.1575C3.19604 15.6544 2.96753 16.1728 2.79932 16.6982C2.63686 17.2062 2.50098 17.7619 2.39545 18.3498C2.29091 18.9326 2.21989 19.4854 2.18478 19.9933C2.15027 20.4907 2.13281 21.0071 2.13281 21.5286C2.13281 22.8858 2.56425 23.9845 3.41504 24.7948C4.25531 25.5944 5.36714 26.0001 6.71919 26.0001H19.2384C20.5904 26.0001 21.7018 25.5946 22.5423 24.7948C23.3933 23.9851 23.8247 22.8862 23.8247 21.5284C23.8245 21.0045 23.8069 20.4878 23.7722 19.9927Z"
              fill="url(#paint1_linear_1_47962)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_47962"
              x1="12.9788"
              y1="0"
              x2="12.9788"
              y2="26.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D9FF" />
              <stop offset="1" stopColor="#007DFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_47962"
              x1="12.9788"
              y1="0"
              x2="12.9788"
              y2="26.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D9FF" />
              <stop offset="1" stopColor="#007DFF" />
            </linearGradient>
            <clipPath id="clip0_1_47962">
              <rect width="26" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Dispute Resolution",
      desc: "Any issues not directly addressed in these terms will be handled by management in a fair and binding manner. Management's decision is final.",
    },
    {
      id: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <g clip-path="url(#clip0_1_47962)">
            <path
              d="M12.8147 12.5243C14.5353 12.5243 16.0253 11.9072 17.2426 10.6896C18.46 9.47225 19.0771 7.98274 19.0771 6.26194C19.0771 4.54173 18.46 3.05202 17.2424 1.83427C16.0249 0.617109 14.5351 0 12.8147 0C11.0939 0 9.6044 0.617109 8.38704 1.83447C7.16968 3.05182 6.55237 4.54153 6.55237 6.26194C6.55237 7.98274 7.16968 9.47245 8.38724 10.6898C9.6048 11.907 11.0945 12.5243 12.8147 12.5243Z"
              fill="url(#paint0_linear_1_47962)"
            />
            <path
              d="M23.7722 19.9927C23.7371 19.486 23.666 18.9334 23.5615 18.3498C23.456 17.7619 23.3201 17.206 23.1574 16.698C22.9894 16.173 22.7609 15.6544 22.4784 15.1575C22.1853 14.6418 21.8409 14.1927 21.4545 13.8232C21.0504 13.4365 20.5557 13.1257 19.9836 12.899C19.4135 12.6734 18.7817 12.5592 18.1059 12.5592C17.8405 12.5592 17.5838 12.6681 17.0881 12.9908C16.783 13.1898 16.4261 13.4199 16.0278 13.6744C15.6872 13.8914 15.2258 14.0947 14.6559 14.2788C14.0999 14.4587 13.5354 14.55 12.9782 14.55C12.421 14.55 11.8566 14.4587 11.3 14.2788C10.7307 14.0949 10.2693 13.8916 9.92912 13.6746C9.53458 13.4225 9.17752 13.1924 8.86787 12.9906C8.37276 12.6679 8.11588 12.559 7.85046 12.559C7.17444 12.559 6.54285 12.6734 5.97295 12.8992C5.40126 13.1255 4.90634 13.4363 4.50188 13.8234C4.11566 14.1931 3.7711 14.642 3.47832 15.1575C3.19604 15.6544 2.96753 16.1728 2.79932 16.6982C2.63686 17.2062 2.50098 17.7619 2.39545 18.3498C2.29091 18.9326 2.21989 19.4854 2.18478 19.9933C2.15027 20.4907 2.13281 21.0071 2.13281 21.5286C2.13281 22.8858 2.56425 23.9845 3.41504 24.7948C4.25531 25.5944 5.36714 26.0001 6.71919 26.0001H19.2384C20.5904 26.0001 21.7018 25.5946 22.5423 24.7948C23.3933 23.9851 23.8247 22.8862 23.8247 21.5284C23.8245 21.0045 23.8069 20.4878 23.7722 19.9927Z"
              fill="url(#paint1_linear_1_47962)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_47962"
              x1="12.9788"
              y1="0"
              x2="12.9788"
              y2="26.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D9FF" />
              <stop offset="1" stopColor="#007DFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_47962"
              x1="12.9788"
              y1="0"
              x2="12.9788"
              y2="26.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D9FF" />
              <stop offset="1" stopColor="#007DFF" />
            </linearGradient>
            <clipPath id="clip0_1_47962">
              <rect width="26" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Liability Disclaimer",
      desc: "WinproFX will not be held responsible for any trading losses incurred. This program does not alter participants' risk profiles or investment strategies.",
    },
    {
      id: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <g clip-path="url(#clip0_1_47962)">
            <path
              d="M12.8147 12.5243C14.5353 12.5243 16.0253 11.9072 17.2426 10.6896C18.46 9.47225 19.0771 7.98274 19.0771 6.26194C19.0771 4.54173 18.46 3.05202 17.2424 1.83427C16.0249 0.617109 14.5351 0 12.8147 0C11.0939 0 9.6044 0.617109 8.38704 1.83447C7.16968 3.05182 6.55237 4.54153 6.55237 6.26194C6.55237 7.98274 7.16968 9.47245 8.38724 10.6898C9.6048 11.907 11.0945 12.5243 12.8147 12.5243Z"
              fill="url(#paint0_linear_1_47962)"
            />
            <path
              d="M23.7722 19.9927C23.7371 19.486 23.666 18.9334 23.5615 18.3498C23.456 17.7619 23.3201 17.206 23.1574 16.698C22.9894 16.173 22.7609 15.6544 22.4784 15.1575C22.1853 14.6418 21.8409 14.1927 21.4545 13.8232C21.0504 13.4365 20.5557 13.1257 19.9836 12.899C19.4135 12.6734 18.7817 12.5592 18.1059 12.5592C17.8405 12.5592 17.5838 12.6681 17.0881 12.9908C16.783 13.1898 16.4261 13.4199 16.0278 13.6744C15.6872 13.8914 15.2258 14.0947 14.6559 14.2788C14.0999 14.4587 13.5354 14.55 12.9782 14.55C12.421 14.55 11.8566 14.4587 11.3 14.2788C10.7307 14.0949 10.2693 13.8916 9.92912 13.6746C9.53458 13.4225 9.17752 13.1924 8.86787 12.9906C8.37276 12.6679 8.11588 12.559 7.85046 12.559C7.17444 12.559 6.54285 12.6734 5.97295 12.8992C5.40126 13.1255 4.90634 13.4363 4.50188 13.8234C4.11566 14.1931 3.7711 14.642 3.47832 15.1575C3.19604 15.6544 2.96753 16.1728 2.79932 16.6982C2.63686 17.2062 2.50098 17.7619 2.39545 18.3498C2.29091 18.9326 2.21989 19.4854 2.18478 19.9933C2.15027 20.4907 2.13281 21.0071 2.13281 21.5286C2.13281 22.8858 2.56425 23.9845 3.41504 24.7948C4.25531 25.5944 5.36714 26.0001 6.71919 26.0001H19.2384C20.5904 26.0001 21.7018 25.5946 22.5423 24.7948C23.3933 23.9851 23.8247 22.8862 23.8247 21.5284C23.8245 21.0045 23.8069 20.4878 23.7722 19.9927Z"
              fill="url(#paint1_linear_1_47962)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_47962"
              x1="12.9788"
              y1="0"
              x2="12.9788"
              y2="26.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D9FF" />
              <stop offset="1" stopColor="#007DFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_47962"
              x1="12.9788"
              y1="0"
              x2="12.9788"
              y2="26.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00D9FF" />
              <stop offset="1" stopColor="#007DFF" />
            </linearGradient>
            <clipPath id="clip0_1_47962">
              <rect width="26" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "General Terms",
      desc: "WinproFX reserves the right to amend or terminate this program at any time. All existing terms and conditions of WinproFX apply in addition to these program-specific conditions.",
    },
  ];
  return (
    <div className="common-padding pt-0 max-w-6xl mx-auto">
      <Container>
        <CommonTitle
          className="max-w-160 mb-12"
          subTitle="Important Terms"
          subTitleClass="rounded-full border border-white/20 bg-white/5 px-4 py-1 mb-4 inline-block uppercase text-xs"
          title="Program Terms & Conditions"
          des="Please read these terms carefully before participating in the Trade to Win program."
          desClass="max-w-102"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          <div className="mb-8 md:mb-0">
            <div className="cards flex flex-col space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  initial={{ opacity: 0, y: y }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: duration, delay: `0.${index * 2}` }}
                  viewport={{ once: once, amount: 0.2 }}
                  className=""
                  key={step.id}
                >
                  <div className="single-card relative flex items-start gap-4 ">
                    <div className="card-icon w-12.5 h-12.5 rounded-xl  flex items-center justify-center shrink-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01)_0%,rgba(217,217,217,0.01)_100%)] shadow-[inset_0_4px_4px_0_rgba(0,217,255,0.25),-42px_103px_31px_0_rgba(0,217,255,0),-27px_66px_29px_0_rgba(0,217,255,0.01),-15px_37px_24px_0_rgba(0,217,255,0.03),-7px_17px_18px_0_rgba(0,217,255,0.04),-2px_4px_10px_0_rgba(0,217,255,0.05)]">
                      {step.id}
                    </div>

                    <div className="card-content flex-1 pe-10 lg:pe-20">
                      <h4 className="card-title text-white text-xl font-bold leading-tight mb-3">
                        {step.title}
                      </h4>
                      <p className="text-para text-sm lg:text-base leading-normal max-w-121">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 lg:p-6 border-l-6 border-[#EA4745] mt-10 bg-[rgba(234,71,69,0.08)] rounded-lg ">
          <div className="mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8.95742 2.0416C9.54075 1.54993 10.4824 1.54993 11.0491 2.0416L12.3658 3.1666C12.6158 3.37493 13.0908 3.54993 13.4241 3.54993H14.8408C15.7241 3.54993 16.4491 4.27493 16.4491 5.15827V6.57493C16.4491 6.90827 16.6241 7.37493 16.8324 7.62493L17.9574 8.9416C18.4491 9.52493 18.4491 10.4666 17.9574 11.0333L16.8324 12.3499C16.6241 12.5999 16.4491 13.0666 16.4491 13.3999V14.8166C16.4491 15.6999 15.7241 16.4249 14.8408 16.4249H13.4241C13.0908 16.4249 12.6241 16.5999 12.3741 16.8083L11.0574 17.9333C10.4741 18.4249 9.53242 18.4249 8.96575 17.9333L7.64909 16.8083C7.39909 16.5999 6.92409 16.4249 6.59909 16.4249H5.14075C4.25742 16.4249 3.53242 15.6999 3.53242 14.8166V13.3916C3.53242 13.0666 3.36575 12.5916 3.15742 12.3499L2.03242 11.0249C1.54909 10.4499 1.54909 9.5166 2.03242 8.9416L3.15742 7.6166C3.36575 7.3666 3.53242 6.89993 3.53242 6.57493V5.1666C3.53242 4.28327 4.25742 3.55827 5.14075 3.55827H6.58242C6.91575 3.55827 7.38242 3.38327 7.63242 3.17493L8.95742 2.0416Z" stroke="#EA4745" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 6.7749V10.7999" stroke="#EA4745" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.99609 13.3335H10.0036" stroke="#EA4745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className="max-w-220">
            <p className="text-para text-sm lg:text-base leading-normal mb-4">Trading forex and leveraged products involves significant risk and is not suitable for all investors. Trading may result in losses exceeding your initial investment. Ensure you fully understand the risks involved.</p>
            <a href="/risk-disclosure" className="text-[#EA4745] text-sm lg:text-base leading-normal">
              Read Full Risk Disclosure →
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
