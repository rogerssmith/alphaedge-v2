"use client";
import PaymentCard from "@/components/authenticated/send-money/PaymentCard";
import useTheme from "@/components/hooks/useTheme";
import React, { useState } from "react";
import { FaPaperPlane, FaWallet } from "react-icons/fa";
import paymentCardDetails, { countryData } from "@/constants/paymentCard";
import { Select } from "@mantine/core";
import SendMoneyPaywanderModal from "@/components/authenticated/send-money/SendMoneyPaywanderModal";
import SendMoneyModal from "@/components/authenticated/send-money/SendMoneyModal";
import { useRouter } from "next/navigation";
import { AiFillBank } from "react-icons/ai";
import useCompany from "@/components/hooks/useCompany";

const Send = () => {
  const { mode } = useTheme();
  const [displayPayment, setDisplayPayments] = useState(paymentCardDetails);
  const [sendToPaywanderAccountModal, setSendToPaywanderAccountModal] =
    useState(false);

  const [sendToOthersModal, setSendToOthersModal] = useState(false);
  const [sendToOthersTitle, setSendToOthersTitle] = useState("");
  const [sendToOthersLogo, setSendToOthersLogo] = useState("");

  const { company } = useCompany();

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
        <div>
          <PaymentCard
            onClick={() => setSendToOthersModal(true)}
            icon={FaWallet}
            label="Withdraw To your Crypto wallet"
          />
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
