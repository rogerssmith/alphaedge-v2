"use client";
import React from "react";
import { PlanProps } from "../../../../types/PlanProps";
import { useRouter } from "next/navigation";

export default function PlanCard({
  name,
  price,
  roi,
  duration,
  svgPath,
}: PlanProps) {
  const router = useRouter();
  return (
    <div className="hidden lg:grid gap-x-2 bg-gray-500 text-gray-200 card-2 p-3 rounded-xl grid-cols-5">
      <div className="flex justify-center items-center">
        <svg
          className="text-gray-100 mx-2 text-5xl lg:text-xl"
          fill="currentColor"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path d={svgPath} />
        </svg>
        <span className="capitalize">{name}</span>
      </div>
      <div className="flex flex-col text-center">
        <span>Price</span>
        <span>{price}</span>
      </div>
      <div className="flex flex-col text-center">
        <span>ROI</span>
        <span>{roi}</span>
      </div>
      <div className="flex flex-col text-center">
        <span>Duration</span>
        <span>{duration}</span>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => router.push("/add-money")}
          className="bg-white rounded w-28 h-12 text-black hover:text-white hover:bg-transparent outline outline-white flex justify-center items-center"
        >
          Invest
        </button>
      </div>
    </div>
  );
}
