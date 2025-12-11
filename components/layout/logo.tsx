'use client';

import Link from "next/link";
import {Code2} from "lucide-react";
import React from "react";

export function Logo() {
  return(
    <Link
      href="/"
      className="font-bold text-lg flex items-center uppercase"
    >
      <Code2
        className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
      />
      Emmsom
    </Link>
  )
}