"use client";
import PaymentCard from "@/components/authenticated/send-money/PaymentCard";
import useTheme from "@/components/hooks/useTheme";
import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaWallet } from "react-icons/fa";
import paymentCardDetails, { countryData } from "@/constants/paymentCard";
import { Select } from "@mantine/core";
import SendMoneyPaywanderModal from "@/components/authenticated/send-money/SendMoneyPaywanderModal";
import SendMoneyModal from "@/components/authenticated/send-money/SendMoneyModal";
import { useRouter } from "next/navigation";
import { AiFillBank } from "react-icons/ai";
import useCompany from "@/components/hooks/useCompany";
import axios from "axios";

const Send = () => {
  const { mode } = useTheme();
  const [displayPayment, setDisplayPayments] = useState(paymentCardDetails);
  const [sendToPaywanderAccountModal, setSendToPaywanderAccountModal] =
    useState(false);

  const [sendToOthersModal, setSendToOthersModal] = useState(false);
  const [sendToOthersTitle, setSendToOthersTitle] = useState("");
  const [sendToOthersLogo, setSendToOthersLogo] = useState("");
  const [coins, setCoins] = useState<CoinProps[]>([]);

  const { company } = useCompany();
  const fetchCoins = async () => {
    const { data } = await axios.get(`/api/coin`);
    if (data.error) throw new Error(data.error);
    setCoins(data);
    console.log(data);
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="px-4 md:px-16">
      <div className="w-full px-4 lg:-mt-16 py-16 lg:py-0">
        <div className="Toastify"></div>
        <div className="space-y-2 mb-4 text-center">
          <h2 className="font-bold text-3xl bg-cyan-500 w-20 h-20 m-auto flex justify-center items-center rounded-full text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
            </svg>
          </h2>
          <h2 className="font-bold text-xl lg:text-2xl text-gray-700">
            You're almost ready to withdraw!
          </h2>
          <h4 className="lg:font-semibold text-gray-700">
            To make a withdraw, please select a cryptocurrency, add a withdraw
            wallet, <br />
            and specify amount.
          </h4>
          <p className="text-xs font-light text-gray-700">
            Send your funds directly to your wallet
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl gap-x-4 gap-y-1 grid grid-cols-2">
          {coins.map(({ value }) => (
            <div
              key={value}
              onClick={() => setSendToOthersModal(true)}
              className="bg-white active:bg-purple-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300 cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none"
            >
              <p className=" font-medium text-black">{value.toUpperCase()}</p>
              <div className="shrink-0 bg-[#7439b8] rounded-full">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <circle
                    cx="12"
                    cy="12"
                    r="12"
                    fill="#fff"
                    opacity="0.2"
                  ></circle>
                  <path
                    d="M7 13l3 3 7-7"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <SendMoneyModal
          icon={FaWallet}
          title={sendToOthersTitle}
          opened={sendToOthersModal}
          onClose={() => setSendToOthersModal(false)}
        />
      </div>
    </div>
    //   className="flex justify-center flex-col
    // items-center gap-10"
    // >
    //   <div
    //     className={`text-xl sm:text-2xl font-bold
    //   ${mode === "light" ? "text-slate-700" : "text-black"}`}
    //   >
    //     Send Money
    //   </div>

    //   <div
    //     className={`w-full flex flex-col
    //     items-center gap-5`}
    //   >
    //     <PaymentCard
    //       onClick={() => setSendToPaywanderAccountModal(true)}
    //       label={`Send to other ${company?.name} Account`}
    //       icon={FaPaperPlane}
    //     />

    //     <div
    //       className={`text-lg sm:text-xl font-bold text-center
    //   ${mode === "light" ? "text-slate-700" : "text-black"}`}
    //     >
    //       Methods For Withdrawal
    //     </div>

    //     <PaymentCard
    //       onClick={() => setSendToOthersModal(true)}
    //       icon={FaWallet}
    //       label="Withdraw To your Crypto wallet"
    //     />

    //     <PaymentCard
    //       disabled
    //       onClick={() => {}}
    //       icon={AiFillBank}
    //       label="Withdraw To your Bank"
    //     />
    //   </div>

    //   <SendMoneyPaywanderModal
    //     opened={sendToPaywanderAccountModal}
    //     onClose={() => setSendToPaywanderAccountModal(false)}
    //   />

    //   <SendMoneyModal
    //     icon={FaWallet}
    //     title={sendToOthersTitle}
    //     opened={sendToOthersModal}
    //     onClose={() => setSendToOthersModal(false)}
    //   />
    // </div>
  );
};

export default Send;
