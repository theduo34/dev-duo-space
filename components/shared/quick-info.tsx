'use client';

import React from "react";
import {MyButton} from "@/components/shared/my-button";
import {ToggleTheme} from "@/components/layout/toggle-theme";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";

export default function QuickInfo() {
  return (
    <div className="w-full flex flex-row items-center justify-between md:justify-center gap-4">
      <Button
        variant="outline"
        className={"items-center p-2 w-10 h-10 border rounded-full"}
      >
        <Github/>
      </Button>

      <div className="order-2 md:order-1">
        <ToggleTheme/>
      </div>

      <div className={"order-1 md:order-2"}>
        <MyButton label={"Visit resume"}/>
      </div>
    </div>
  )
}