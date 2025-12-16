'use client';

import React from "react";
import {MyButton} from "@/components/shared/my-button";
import {ToggleTheme} from "@/components/layout/toggle-theme";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import {RESUME_URL} from "@/lib/costants";

export default function QuickInfo() {
  const handleViewResume = () => {
    window.open(
      `${RESUME_URL}/view`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="w-full flex flex-row items-center justify-between md:justify-center gap-4">
      <Button
        variant="outline"
        className={"items-center p-2 w-10 h-10 border rounded-full"}
      >
        <a
          href="https://github.com/theduo34"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github/>
        </a>
      </Button>

      <div className="order-2 md:order-1">
        <ToggleTheme/>
      </div>

      <div className={"order-1 md:order-2"}>
      <MyButton
        label={"Visit resume"}
        onClick={handleViewResume}
      >
      </MyButton>
      </div>
    </div>
  )
}