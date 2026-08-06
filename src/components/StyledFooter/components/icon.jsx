"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { loadIcon } from "@/utils/icon-mapper";

const FallbackIcon = () => null;

const IconDiv = ({ icon = "" }) => {
  const Icon = useMemo(() => {
    if (!icon) return null;

    return loadIcon(icon);
  }, [icon]);

  if (!Icon) return null;

  return <Icon size={24} />;
};

export default IconDiv;
