"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const HEADER_ITEMS = {
  "/": "Home",
  "/about": "About",
  "/project": "Project",
  "/post": "Post",
  "/bookmark": "Bookmark",
};

export const HeaderLinks = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-row items-center justify-start space-x-4">
        {Object.entries(HEADER_ITEMS).map(([key, value]) => {
          const isActive = key === pathname;

          return (
            <li key={key}>
              <Link
                href={key}
                className={cn(
                  isActive
                    ? "text-zinc-900 bg-zinc-50"
                    : "text-zinc-600 hover:text-zinc-900",
                  "text-sm p-2 rounded"
                )}
              >
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
