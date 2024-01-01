"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";

const HEADER_ITEMS = {
  "/": "Home",
  "/about": "About",
  "/project": "Project",
  "/post": "Post",
  "/bookmark": "Bookmark",
};

export const Header = () => {
  const pathname = usePathname();
  return (
    <Container>
      <div className="my-12 space-y-8">
        <header className="flex flex-row items-center justify-start space-x-2">
          <div>
            <Image
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fhu11majy%2Fproduction%2F12d6ef9326b38ff6296537baa0ba03ea53844a96-460x460.png%3Fw%3D300%26h%3D300%26q%3D80&w=384&q=75"
              alt="logo"
              width={48}
              height={48}
              className="w-12 h-12 border rounded-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-zinc-900">Onurhan Demir</h1>
            <p className="text-sm text-zinc-500">Front-end Engineer</p>
          </div>
        </header>

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
      </div>
    </Container>
  );
};
