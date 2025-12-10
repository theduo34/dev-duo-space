'use client';

import React from "react";
import {MyButton} from "@/components/shared/my-button";
import {ToggleTheme} from "@/components/layout/toggle-theme";

export default function QuickInfo() {
  return (
    <div className="w-full flex flex-row items-center justify-between md:justify-center gap-2">

      <div className="order-2 md:order-1">
        <ToggleTheme/>
      </div>

      <div className={"order-1 md:order-2"}>
        <MyButton label={"Visit resume"}/>
      </div>
    </div>
  )
}