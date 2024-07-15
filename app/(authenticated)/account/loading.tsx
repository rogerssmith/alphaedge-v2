"use client";
import useCompany from "@/components/hooks/useCompany";
import { Loader } from "@mantine/core";
import React from "react";

const Loading = () => {
  const { company } = useCompany();
  const primaryLightColor = "#9D00FF";

  return (
    <div className="h-[70vh] w-full flex items-center justify-center">
      <Loader color={primaryLightColor} />
    </div>
  );
};

export default Loading;
