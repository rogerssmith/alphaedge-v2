"use client";
import React, { useCallback, useEffect, useState } from "react";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { FaSearch } from "react-icons/fa";
import TransactionCard from "@/components/authenticated/home/spend/TransactionCard";
import useTheme from "@/components/hooks/useTheme";
import { useRouter } from "next/navigation";
import { AiOutlineInbox } from "react-icons/ai";
import formatNumber from "@/constants/formatNumber";
import useCompany from "@/components/hooks/useCompany";
// import { PlanCard } from "./PlanCard";
import PlanCard from "./PlanCard";
import { Loader } from "@mantine/core";
import axios from "axios";
import { toast } from "react-hot-toast";
import { PlanProps } from "@/types/PlanProps";

interface SpendProps {
  user: userSchemaType;
  transactions: TransactionProps[];
  pendingBalance: number;
}

// const plans = [
//   {
//     name: "Silver Package",
//     price: "$500 - $5000",
//     roi: "20% daily",
//     duration: "30 days",
//     svgPath:
//       "M265.8 18.05c-4.7 38.56-4.7 38.56-38.4 57.92 38.6 4.73 38.6 4.73 58 38.43 4.7-38.58 4.7-38.58 38.4-57.95-38.6-4.73-38.6-4.73-58-38.4zm206.3 20.59c-3.8 1.14-9 3.12-15.2 6.04-14.1 6.57-32.6 17.05-51.9 29-38.5 23.86-80.5 54.32-96.1 70.42l-.8.8-42 24.4c3.6 2.2 7 4.6 10.5 7.3 12.8 9.9 25.3 22.6 32 28.9l-12.2 13.2c-7.5-7-19.4-19.1-30.8-27.9-5.6-4.3-11.2-7.8-15-9.3-2.2-.8-3.3-1-3.8-1l-.8.5L60.57 366.2c3.35.5 6.73 1.4 10.09 2.5 14.85 4.9 30.54 14.9 44.84 29.2 14.2 14.2 24.2 29.9 29.2 44.7.6 1.9 1.2 3.8 1.6 5.8l183.3-183.3 36-58.6.7-.8c17.8-17.7 48.1-60.4 71.6-99.3 11.8-19.41 22-38.06 28.3-52.18 2.9-6.4 4.8-11.71 5.9-15.58zM438 153.2c4.1 31.3 4.1 31.3-18.4 53.5 31.4-4.2 31.4-4.2 53.5 18.2-4.2-31.2-4.2-31.2 18.1-53.4-31.1 4.1-31.1 4.1-53.2-18.3zM85.47 185.4c-16.43 30.2-16.43 30.2-50.41 35.3 30.18 16.5 30.18 16.5 35.3 50.4C86.79 241 86.79 241 120.7 235.8c-30.14-16.5-30.14-16.5-35.23-50.4zm333.03 55.2c-25.1 52-25.1 52-81.9 63.1 52.1 25.1 52.1 25.1 63.2 81.9 25.1-52.1 25.1-52.1 81.8-63.1-52-25.2-52-25.2-63.1-81.9zM52.38 383.5c-4.41 0-7.54 1.2-9.37 3-3.25 3.3-4.52 10.6-.78 22 3.82 11.3 12.45 25.2 24.89 37.7 12.45 12.4 26.31 21 37.68 24.8 11.4 3.8 18.7 2.5 22-.7 3.2-3.3 4.5-10.6.8-22-3.9-11.3-12.5-25.2-25-37.6-12.42-12.5-26.28-21.1-37.6-24.9-4.98-1.7-9.19-2.3-12.62-2.3zm166.12 28.4c3 25.2 3 25.2-15.4 42.9 25.3-3.1 25.3-3.1 43 15.3-3-25.3-3-25.3 15.2-42.9-25.2 3-25.2 3-42.8-15.3zM69.32 421a20.66 7.804 45 0 1 16.83 10.1 20.66 7.804 45 0 1 9.09 20.1 20.66 7.804 45 0 1-20.13-9.1 20.66 7.804 45 0 1-9.09-20.1 20.66 7.804 45 0 1 3.3-1z",
//   },
//   {
//     name: "Gold Package",
//     price: "$1000 - $10,000",
//     roi: "30% daily",
//     duration: "30 days",
//     svgPath:
//       "M265.8 18.05c-4.7 38.56-4.7 38.56-38.4 57.92 38.6 4.73 38.6 4.73 58 38.43 4.7-38.58 4.7-38.58 38.4-57.95-38.6-4.73-38.6-4.73-58-38.4zm206.3 20.59c-3.8 1.14-9 3.12-15.2 6.04-14.1 6.57-32.6 17.05-51.9 29-38.5 23.86-80.5 54.32-96.1 70.42l-.8.8-42 24.4c3.6 2.2 7 4.6 10.5 7.3 12.8 9.9 25.3 22.6 32 28.9l-12.2 13.2c-7.5-7-19.4-19.1-30.8-27.9-5.6-4.3-11.2-7.8-15-9.3-2.2-.8-3.3-1-3.8-1l-.8.5L60.57 366.2c3.35.5 6.73 1.4 10.09 2.5 14.85 4.9 30.54 14.9 44.84 29.2 14.2 14.2 24.2 29.9 29.2 44.7.6 1.9 1.2 3.8 1.6 5.8l183.3-183.3 36-58.6.7-.8c17.8-17.7 48.1-60.4 71.6-99.3 11.8-19.41 22-38.06 28.3-52.18 2.9-6.4 4.8-11.71 5.9-15.58zM438 153.2c4.1 31.3 4.1 31.3-18.4 53.5 31.4-4.2 31.4-4.2 53.5 18.2-4.2-31.2-4.2-31.2 18.1-53.4-31.1 4.1-31.1 4.1-53.2-18.3zM85.47 185.4c-16.43 30.2-16.43 30.2-50.41 35.3 30.18 16.5 30.18 16.5 35.3 50.4C86.79 241 86.79 241 120.7 235.8c-30.14-16.5-30.14-16.5-35.23-50.4zm333.03 55.2c-25.1 52-25.1 52-81.9 63.1 52.1 25.1 52.1 25.1 63.2 81.9 25.1-52.1 25.1-52.1 81.8-63.1-52-25.2-52-25.2-63.1-81.9zM52.38 383.5c-4.41 0-7.54 1.2-9.37 3-3.25 3.3-4.52 10.6-.78 22 3.82 11.3 12.45 25.2 24.89 37.7 12.45 12.4 26.31 21 37.68 24.8 11.4 3.8 18.7 2.5 22-.7 3.2-3.3 4.5-10.6.8-22-3.9-11.3-12.5-25.2-25-37.6-12.42-12.5-26.28-21.1-37.6-24.9-4.98-1.7-9.19-2.3-12.62-2.3zm166.12 28.4c3 25.2 3 25.2-15.4 42.9 25.3-3.1 25.3-3.1 43 15.3-3-25.3-3-25.3 15.2-42.9-25.2 3-25.2 3-42.8-15.3zM69.32 421a20.66 7.804 45 0 1 16.83 10.1 20.66 7.804 45 0 1 9.09 20.1 20.66 7.804 45 0 1-20.13-9.1 20.66 7.804 45 0 1-9.09-20.1 20.66 7.804 45 0 1 3.3-1z",
//   },
//   {
//     name: "Diamond Package",
//     price: "$5000 - $50,000",
//     roi: "50% daily",
//     duration: "30 days",
//     svgPath:
//       "M265.8 18.05c-4.7 38.56-4.7 38.56-38.4 57.92 38.6 4.73 38.6 4.73 58 38.43 4.7-38.58 4.7-38.58 38.4-57.95-38.6-4.73-38.6-4.73-58-38.4zm206.3 20.59c-3.8 1.14-9 3.12-15.2 6.04-14.1 6.57-32.6 17.05-51.9 29-38.5 23.86-80.5 54.32-96.1 70.42l-.8.8-42 24.4c3.6 2.2 7 4.6 10.5 7.3 12.8 9.9 25.3 22.6 32 28.9l-12.2 13.2c-7.5-7-19.4-19.1-30.8-27.9-5.6-4.3-11.2-7.8-15-9.3-2.2-.8-3.3-1-3.8-1l-.8.5L60.57 366.2c3.35.5 6.73 1.4 10.09 2.5 14.85 4.9 30.54 14.9 44.84 29.2 14.2 14.2 24.2 29.9 29.2 44.7.6 1.9 1.2 3.8 1.6 5.8l183.3-183.3 36-58.6.7-.8c17.8-17.7 48.1-60.4 71.6-99.3 11.8-19.41 22-38.06 28.3-52.18 2.9-6.4 4.8-11.71 5.9-15.58zM438 153.2c4.1 31.3 4.1 31.3-18.4 53.5 31.4-4.2 31.4-4.2 53.5 18.2-4.2-31.2-4.2-31.2 18.1-53.4-31.1 4.1-31.1 4.1-53.2-18.3zM85.47 185.4c-16.43 30.2-16.43 30.2-50.41 35.3 30.18 16.5 30.18 16.5 35.3 50.4C86.79 241 86.79 241 120.7 235.8c-30.14-16.5-30.14-16.5-35.23-50.4zm333.03 55.2c-25.1 52-25.1 52-81.9 63.1 52.1 25.1 52.1 25.1 63.2 81.9 25.1-52.1 25.1-52.1 81.8-63.1-52-25.2-52-25.2-63.1-81.9zM52.38 383.5c-4.41 0-7.54 1.2-9.37 3-3.25 3.3-4.52 10.6-.78 22 3.82 11.3 12.45 25.2 24.89 37.7 12.45 12.4 26.31 21 37.68 24.8 11.4 3.8 18.7 2.5 22-.7 3.2-3.3 4.5-10.6.8-22-3.9-11.3-12.5-25.2-25-37.6-12.42-12.5-26.28-21.1-37.6-24.9-4.98-1.7-9.19-2.3-12.62-2.3zm166.12 28.4c3 25.2 3 25.2-15.4 42.9 25.3-3.1 25.3-3.1 43 15.3-3-25.3-3-25.3 15.2-42.9-25.2 3-25.2 3-42.8-15.3zM69.32 421a20.66 7.804 45 0 1 16.83 10.1 20.66 7.804 45 0 1 9.09 20.1 20.66 7.804 45 0 1-20.13-9.1 20.66 7.804 45 0 1-9.09-20.1 20.66 7.804 45 0 1 3.3-1z",
//   },
// ];

const Spend = (props: SpendProps) => {
  const { user, transactions, pendingBalance } = props;
  const { mode } = useTheme();

  const [searchInput, setSearchInput] = useState("");
  const [displayTransaction, setDisplayTransaction] = useState(transactions);

  const { company } = useCompany();
  const primaryLightColor = company?.color.primaryLight;

  const currency = company?.currency.symbol;

  const searchInputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const enteredText = e.target.value;
      setSearchInput(enteredText);
      const copyTransactions = transactions.slice(0);
      const filteredTransactions = copyTransactions.filter(
        (item) =>
          item.title.toLowerCase().includes(enteredText.toLowerCase()) ||
          item.status.toLowerCase().includes(enteredText.toLowerCase())
      );
      setDisplayTransaction(filteredTransactions);
    },
    [transactions]
  );
  const [plans, setPlans] = useState<PlanProps[]>([]);
  const [loading, setLoading] = useState(false);
  const getPlans = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/plan`);
      if (data.error) throw new Error(data.error);
      console.log(data);
      setPlans(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="px-4 md:px-16">
        <div className="text-right text-black px-4 pt-4 w-[22rem] lg:w-full">
          <h2>Welcome Back, {user.fullname}</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 mb-16 px-10 py-2">
          <div className="rounded-xl bg-white h-40 shadow-2xl flex justify-between w-full border p-4">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">$</p>
              <p className="text-gray-600">Total Staked Value</p>
            </div>
            <p className="bg-green-200 flex justify-center items-center p-2 rounded-xl">
              <span className="text-green-700 text-lg">%</span>
            </p>
          </div>
          <div className="rounded-xl bg-white h-40 shadow-2xl flex justify-between w-full border p-4">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">$</p>
              <p className="text-gray-600">Current Value</p>
            </div>
            <p className="bg-green-200 flex justify-center items-center p-2 rounded-xl">
              <span className="text-green-700 text-lg">%</span>
            </p>
          </div>
          <div className="rounded-xl bg-white h-40 shadow-2xl flex justify-between w-full border p-4">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">%</p>
              <p className="text-gray-600">ROI</p>
            </div>
          </div>
        </div>
        <div className="p-4 -mt-5 md:px-12 grid md:grid-cols-3">
          <div className="md:col-span-3 -ml-4">
            <div className="w-[28rem] lg:w-full py-5 p-2 text-black">
              <h1 className="font-bold text-2xl py-2">Staking Plans</h1>
              <div className="grid pr-28 lg:px-0 grid-cols-1 shadow-sm rounded">
                <div className="mx-auto w-full h-fit space-y-7">
                  {plans.map((plan, index) => (
                    <PlanCard key={index} {...plan} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* <div className="flex items-center justify-between px-3 flex-wrap gap-2">
        <div className="flex flex-col gap-1">
          <div
            className={`text-xs font-medium 
          ${mode === "light" ? "text-slate-700" : "text-black"}`}
          >
            Account Balance
          </div>

          <div
            className={`font-bold text-3xl sm:text-4xl 
          ${mode === "light" ? "text-slate-700" : "text-black"}`}
          >
            {currency}
            {formatNumber(user.accountBalance)}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div
            className={`text-xs font-medium 
          ${mode === "light" ? "text-slate-700" : "text-black"}`}
          >
            Pending Balance
          </div>

          <div
            style={{ color: primaryLightColor }}
            className="font-bold text-3xl sm:text-4xl"
          >
            {currency}
            {formatNumber(pendingBalance)}
          </div>
        </div>
      </div>

      <div className="flex gap-3 w-full items-center ">
        <Button onClick={() => router.push("/add-money")} label={"Add Money"} />
        <Button
          outline
          onClick={() => router.push("/send-money")}
          label={"Withdraw Money"}
        />
      </div>

      <TextInput
        value={searchInput}
        onChange={searchInputChangeHandler}
        icon={FaSearch}
        placeholder="Search Transaction"
      />

      <div className="flex flex-col w-full">
        {displayTransaction.length > 0 &&
          displayTransaction.map((item) => (
            <TransactionCard
              key={item._id}
              id={item._id}
              title={item.title}
              createdAt={item.createdAt}
              status={item.status}
              category={item.category}
              amount={item.amount}
              senderName={item.senderName}
            />
          ))}

        {displayTransaction.length <= 0 && (
          <div className="flex justify-center flex-col items-center">
            <AiOutlineInbox color={primaryLightColor} size={100} />
            <div
              className={`font-semibold text-lg
              ${mode === "light" ? "text-slate-700" : "text-white"}`}
            >
              No Availaible transactions
            </div>
          </div>
        )}
      </div> */
  }
};

export default Spend;
