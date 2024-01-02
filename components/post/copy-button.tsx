"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const CopyButton = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [copied]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button
      aria-label="Copy code"
      aria-pressed={copied}
      aria-live="polite"
      onClick={copyToClipboard}
      className={cn(
        "inline-flex items-center bg-stone-800 hover:bg-stone-700 p-2 text-white font-bold rounded",
        copied && "animate-pop",
        className
      )}
    >
      <span
        className={cn(
          copied ? "text-green-500 scale-105" : "text-stone-200",
          "transition-colors duration-100 ease-in-out transform animate-pop"
        )}
      >
        {copied ? <CopiedIcon /> : <CopyIcon />}
      </span>
    </button>
  );
};

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-copy"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
  </svg>
);

const CopiedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-check"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l5 5l10 -10" />
  </svg>
);
